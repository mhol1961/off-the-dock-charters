-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Create enum types
create type booking_status as enum ('pending', 'confirmed', 'cancelled');
create type payment_status as enum ('pending', 'paid', 'refunded', 'failed');
create type trip_type as enum ('half-day', 'full-day', 'custom');

-- Create bookings table
create table bookings (
  id uuid default uuid_generate_v4() primary key,
  user_email text not null,
  first_name text not null,
  last_name text not null,
  phone text not null,
  date date not null,
  time_slot text not null,
  party_size int not null check (party_size between 1 and 6),
  trip_type trip_type not null,
  status booking_status not null default 'pending',
  payment_status payment_status not null default 'pending',
  notes text,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Create availability table
create table availability (
  id uuid default uuid_generate_v4() primary key,
  date date not null,
  available_slots jsonb not null default '{"morning": true, "afternoon": true, "fullday": true}'::jsonb,
  blocked boolean not null default false,
  reason text,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Create payments table
create table payments (
  id uuid default uuid_generate_v4() primary key,
  booking_id uuid references bookings(id) on delete cascade,
  amount integer not null check (amount >= 0),
  stripe_payment_id text,
  status payment_status not null default 'pending',
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Create indexes
create index bookings_date_idx on bookings(date);
create index availability_date_idx on availability(date);
create index payments_booking_id_idx on payments(booking_id);

-- Create updated_at trigger function
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql;

-- Create triggers for updated_at
create trigger update_bookings_updated_at
  before update on bookings
  for each row
  execute function update_updated_at_column();

create trigger update_availability_updated_at
  before update on availability
  for each row
  execute function update_updated_at_column();

create trigger update_payments_updated_at
  before update on payments
  for each row
  execute function update_updated_at_column();

-- Create RLS policies
alter table bookings enable row level security;
alter table availability enable row level security;
alter table payments enable row level security;

-- Bookings policies
create policy "Bookings are viewable by creator"
  on bookings for select
  using (auth.jwt() is null or auth.jwt()->>'email' = user_email);

create policy "Bookings are insertable by anyone"
  on bookings for insert
  with check (true);

-- Availability policies
create policy "Availability is viewable by anyone"
  on availability for select
  using (true);

-- Payments policies
create policy "Payments are viewable by booking creator"
  on payments for select
  using (
    auth.jwt() is null or 
    exists (
      select 1 from bookings 
      where bookings.id = payments.booking_id 
      and bookings.user_email = auth.jwt()->>'email'
    )
  );

create policy "Payments are insertable by anyone"
  on payments for insert
  with check (true);
