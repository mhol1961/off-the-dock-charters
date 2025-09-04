import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { generateCharterServiceSchema, generateLocalBusinessSchema } from '@/lib/utils/structuredData'

export const metadata: Metadata = {
  title: 'Manatee River Fishing: Hidden Gem for Snook, Redfish & Tarpon | Off The Dock Charters',
  description: 'Discover the secret fishing spots of the Manatee River near Bradenton, FL. Expert guide reveals the best locations for snook, redfish, and tarpon fishing.',
  keywords: 'Manatee River fishing, Bradenton fishing guide, snook fishing, redfish fishing, tarpon fishing, backcountry fishing, inshore fishing Florida',
  openGraph: {
    title: 'Manatee River Fishing: Hidden Gem for Snook, Redfish & Tarpon',
    description: 'Discover the secret fishing spots of the Manatee River near Bradenton, FL. Expert guide reveals the best locations for snook, redfish, and tarpon fishing.',
    images: ['/images/ManWithRedfish3.jpeg'],
    type: 'article',
  },
}

export default function ManateeRiverFishingPage() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              generateCharterServiceSchema(),
              generateLocalBusinessSchema(),
              {
                '@type': 'Article',
                '@id': 'https://offthedockcharters.com/blog/manatee-river-fishing-guide',
                'headline': 'Manatee River Fishing: Hidden Gem for Snook, Redfish & Tarpon',
                'description': 'Discover the secret fishing spots of the Manatee River near Bradenton, FL. Expert guide reveals the best locations for snook, redfish, and tarpon fishing.',
                'image': 'https://offthedockcharters.com/images/ManWithRedfish3.jpeg',
                'author': {
                  '@type': 'Person',
                  'name': 'Captain Chandler Brown'
                },
                'publisher': {
                  '@type': 'Organization',
                  'name': 'Off The Dock Charters',
                  'logo': {
                    '@type': 'ImageObject',
                    'url': 'https://offthedockcharters.com/images/Logo_OTD_Charters.png'
                  }
                },
                'datePublished': '2025-05-30',
                'dateModified': '2025-05-30'
              }
            ]
          })
        }}
      />

      <article className="container mx-auto px-4 py-24 max-w-4xl">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-[#D59633]">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/blog" className="hover:text-[#D59633]">Blog</Link>
          <span className="mx-2">›</span>
          <span>Manatee River Fishing</span>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Manatee River Fishing: Hidden Gem for Snook, Redfish & Tarpon
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-6">
            <span>By Captain Chandler Brown</span>
            <span>•</span>
            <span>Published: May 30, 2025</span>
            <span>•</span>
            <span>10 min read</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Manatee River', 'Snook Fishing', 'Redfish', 'Tarpon', 'Backcountry Fishing', 'Bradenton Charters', 'Mangrove Fishing'].map((tag) => (
              <span key={tag} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <Image
            src="/images/manatee-scenic-photo.png"
            alt="Manatee River backcountry fishing with mangrove shorelines and pristine waters near Bradenton Florida"
            width={800}
            height={400}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-xl"
          />
          <p className="text-gray-400 text-sm mt-2 italic text-center">
            The pristine backcountry waters of the Manatee River offer some of Bradenton's best fishing
          </p>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-xl text-[#D59633] font-medium mb-6">
            While most anglers head straight to the beaches and grass flats around Bradenton, smart fishing guides know that some of the area's best action happens in the winding backcountry waters of the Manatee River. This hidden gem consistently produces trophy snook, redfish, and even massive tarpon.
          </p>

          <p className="mb-6">
            The Manatee River system stretches deep into Florida's interior, creating a diverse ecosystem that many visiting anglers never experience. At Off The Dock Charters, we've spent years learning every bend, creek mouth, and structure along this productive waterway. What we've discovered will change how you think about Bradenton fishing.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6 border-b-2 border-[#D59633] pb-2">
            Why the Manatee River is Special
          </h2>

          <p className="mb-6">
            The Manatee River offers something unique in the Bradenton fishing landscape: true backcountry fishing just minutes from civilization. Unlike the open waters around Anna Maria Island or the busy grass flats of Sarasota Bay, the river provides intimate fishing experiences in pristine natural settings.
          </p>

          <div className="my-8">
            <Image
              src="/images/ManWithRedfish1.jpeg"
              alt="Narrow mangrove creek in Manatee River system perfect for snook fishing"
              width={800}
              height={350}
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
            <p className="text-gray-400 text-sm mt-2 italic text-center">
              Narrow mangrove creeks hold some of the area's largest snook
            </p>
          </div>

          <p className="mb-4">The river system includes:</p>
          <ul className="mb-6 space-y-2">
            <li><strong>Main river channels</strong> with depths ranging from 8-20 feet</li>
            <li><strong>Countless tributary creeks</strong> perfect for sight fishing</li>
            <li><strong>Massive mangrove systems</strong> that provide cover and food</li>
            <li><strong>Oyster bars and structure</strong> that concentrate baitfish</li>
            <li><strong>Varied salinity levels</strong> that attract different species</li>
          </ul>

          <p className="mb-8">
            This diversity means we can target multiple species in a single trip while enjoying the peaceful beauty of Old Florida.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6 border-b-2 border-[#D59633] pb-2">
            Snook: The River's Crown Jewel
          </h2>

          <p className="mb-6">
            The Manatee River produces some of Bradenton's largest snook, and there's a good reason why. These fish love the river's combination of structure, current, and baitfish populations.
          </p>

          <h3 className="text-2xl font-bold text-[#D59633] mt-8 mb-4">
            Where to Find Manatee River Snook
          </h3>

          <p className="mb-6">
            Snook in the river behave differently than their saltwater cousins. They use the extensive mangrove systems for both feeding and protection, making them somewhat predictable once you understand their patterns.
          </p>

          <div className="bg-green-900/30 border-l-4 border-green-500 p-6 my-8 rounded-r-lg">
            <h4 className="text-green-400 font-bold mb-2">💡 Captain's Tip</h4>
            <p className="text-gray-300">
              Early morning and late evening produce the best snook action in the river. These fish feed aggressively during low-light periods, especially around creek mouths and downed trees.
            </p>
          </div>

          <p className="mb-4">Our most productive snook spots include:</p>
          <ul className="mb-6 space-y-2">
            <li><strong>Creek mouths</strong> where smaller tributaries meet the main river</li>
            <li><strong>Overhanging mangroves</strong> that provide shade and cover</li>
            <li><strong>Downed trees and structure</strong> in 4-8 feet of water</li>
            <li><strong>Oyster bar edges</strong> where baitfish congregate</li>
            <li><strong>Dock lights</strong> at night (where legal to fish)</li>
          </ul>

          <div className="my-8">
            <Image
              src="/images/ManWithRedfish3.jpeg"
              alt="Angler holding large snook caught in Manatee River backcountry"
              width={800}
              height={350}
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
            <p className="text-gray-400 text-sm mt-2 italic text-center">
              River snook often exceed 30 inches and provide incredible fights in tight quarters
            </p>
          </div>

          <h3 className="text-2xl font-bold text-[#D59633] mt-8 mb-4">
            Best Techniques for River Snook
          </h3>

          <p className="mb-6">
            Fishing for snook in the river requires different techniques than open water fishing. The tight quarters demand precision casting and intimate knowledge of fish behavior.
          </p>

          <p className="mb-4">
            <strong>Live Bait Fishing:</strong> Large shiners or pilchards fished under docks and mangroves produce consistent results. The key is presenting the bait naturally in areas where snook ambush prey.
          </p>

          <p className="mb-8">
            <strong>Lure Fishing:</strong> Topwater plugs create explosive action during dawn and dusk. Soft plastic jerkbaits work well when fish are holding tight to structure.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6 border-b-2 border-[#D59633] pb-2">
            Redfish: Backcountry Specialists
          </h2>

          <p className="mb-6">
            While redfish are famous for their grass flat feeding, the Manatee River offers a completely different redfish experience. Here, these copper-colored fighters use the river's varied structure and deeper water to their advantage.
          </p>

          <h3 className="text-2xl font-bold text-[#D59633] mt-8 mb-4">
            Seasonal Redfish Patterns in the River
          </h3>

          <p className="mb-6">
            River redfish follow predictable seasonal patterns that experienced guides can use to consistently locate fish throughout the year.
          </p>

          <div className="bg-blue-900/30 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
            <h3 className="text-blue-400 font-bold mb-2">Winter Advantage</h3>
            <p className="text-gray-300">
              The Manatee River truly shines during cooler months when redfish move into the warmer, protected waters of the backcountry. While other areas slow down, the river fishing often heats up.
            </p>
          </div>

          <p className="mb-4">
            <strong>Spring and Summer:</strong> Redfish spread throughout the river system, from shallow creeks to main river channels. Look for them feeding around oyster bars and mangrove points during moving tides.
          </p>

          <p className="mb-8">
            <strong>Fall and Winter:</strong> Fish concentrate in deeper holes and creek bends where water temperatures remain stable. This concentration often leads to multiple-fish days.
          </p>

          <div className="my-8">
            <Image
              src="/images/client_with_redfish.jpeg"
              alt="Large redfish being released in shallow Manatee River creek"
              width={800}
              height={350}
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
            <p className="text-gray-400 text-sm mt-2 italic text-center">
              Shallow creeks off the main river hold feeding redfish year-round
            </p>
          </div>

          <h3 className="text-2xl font-bold text-[#D59633] mt-8 mb-4">
            Reading the Water for Redfish
          </h3>

          <p className="mb-4">Successful river redfish fishing requires reading subtle water signs that indicate fish presence:</p>
          <ul className="mb-8 space-y-2">
            <li><strong>Muddy water</strong> often indicates redfish feeding on bottom</li>
            <li><strong>Nervous baitfish</strong> suggest predators are nearby</li>
            <li><strong>Bird activity</strong> over oyster bars signals feeding opportunities</li>
            <li><strong>Current breaks</strong> around structure hold ambushing fish</li>
          </ul>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6 border-b-2 border-[#D59633] pb-2">
            Tarpon: The River's Gentle Giants
          </h2>

          <p className="mb-6">
            Perhaps the most surprising aspect of Manatee River fishing is the presence of tarpon. While not as numerous as in coastal waters, the river holds both juvenile and adult tarpon throughout much of the year.
          </p>

          <h3 className="text-2xl font-bold text-[#D59633] mt-8 mb-4">
            Juvenile Tarpon: Year-Round Action
          </h3>

          <p className="mb-6">
            The river's backcountry areas serve as nurseries for juvenile tarpon. These 10-40 pound fish provide incredible sport in the tight confines of mangrove creeks.
          </p>

          <div className="bg-green-900/30 border-l-4 border-green-500 p-6 my-8 rounded-r-lg">
            <h4 className="text-green-400 font-bold mb-2">🎣 Juvenile Tarpon Tip</h4>
            <p className="text-gray-300">
              Look for rolling fish in deeper creek bends during warm months. Small live baits or soft plastics worked slowly often trigger strikes from these acrobatic fighters.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-[#D59633] mt-8 mb-4">
            Adult Tarpon Migration
          </h3>

          <p className="mb-6">
            During their seasonal migrations, adult tarpon venture surprisingly far up the Manatee River. These encounters are less predictable but incredibly memorable when they occur.
          </p>

          <p className="mb-4">Best times for adult tarpon in the river:</p>
          <ul className="mb-6 space-y-2">
            <li><strong>Late spring</strong> as fish move toward spawning areas</li>
            <li><strong>Early summer</strong> when fish follow bait up the river</li>
            <li><strong>After heavy rains</strong> when increased flow attracts fish upstream</li>
          </ul>

          <div className="my-8">
            <Image
              src="/images/chandler_tarpon.jpeg"
              alt="Tarpon jumping in Manatee River with mangroves in background"
              width={800}
              height={350}
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
            <p className="text-gray-400 text-sm mt-2 italic text-center">
              When tarpon are in the river, the fishing experiences are unforgettable
            </p>
          </div>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6 border-b-2 border-[#D59633] pb-2">
            Planning Your Manatee River Adventure
          </h2>

          <h3 className="text-2xl font-bold text-[#D59633] mt-8 mb-4">
            Best Times to Fish the River
          </h3>

          <p className="mb-6">
            While the Manatee River produces fish year-round, certain conditions optimize your chances for success:
          </p>

          <p className="mb-4">
            <strong>Tidal Considerations:</strong> Moving water generally produces better fishing than slack tides. The two hours before and after tide changes are typically most productive.
          </p>

          <p className="mb-4">
            <strong>Weather Factors:</strong> The river's protected nature makes it an excellent choice during windy conditions that might make open water fishing uncomfortable.
          </p>

          <p className="mb-8">
            <strong>Seasonal Timing:</strong> Each season offers different opportunities, but fall and winter often provide the most consistent action as fish concentrate in the river's warmer waters.
          </p>

          <h3 className="text-2xl font-bold text-[#D59633] mt-8 mb-4">
            What Makes a Great River Guide
          </h3>

          <p className="mb-6">
            Fishing the Manatee River successfully requires specialized knowledge that comes only from years of experience. The river's complex layout and changing conditions demand local expertise.
          </p>

          <div className="bg-blue-900/30 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
            <h3 className="text-blue-400 font-bold mb-2">Local Knowledge Matters</h3>
            <p className="text-gray-300">
              With dozens of creeks, countless structure points, and ever-changing conditions, having an experienced guide dramatically improves your river fishing success. We know which spots produce during different conditions and seasons.
            </p>
          </div>

          <p className="mb-4">Key factors that separate river fishing guides:</p>
          <ul className="mb-8 space-y-2">
            <li><strong>Navigation skills</strong> in shallow, winding waters</li>
            <li><strong>Seasonal pattern knowledge</strong> for each species</li>
            <li><strong>Backup location familiarity</strong> when conditions change</li>
            <li><strong>Species-specific techniques</strong> for river environments</li>
          </ul>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6 border-b-2 border-[#D59633] pb-2">
            Conservation and the Future
          </h2>

          <p className="mb-6">
            The Manatee River represents some of Florida's last pristine backcountry fishing waters. This ecosystem supports not just fish populations but also manatees, dolphins, and countless bird species.
          </p>

          <p className="mb-4">At Off The Dock Charters, we practice and promote responsible fishing:</p>
          <ul className="mb-6 space-y-2">
            <li>Proper catch and release techniques for all species</li>
            <li>Respecting shallow water areas during low tides</li>
            <li>Following all manatee protection guidelines</li>
            <li>Educating anglers about the river's delicate ecosystem</li>
          </ul>

          <div className="my-8">
            <Image
              src="/images/ChandlerRedfish.jpeg"
              alt="Gentle release of large snook back to Manatee River"
              width={800}
              height={350}
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
            <p className="text-gray-400 text-sm mt-2 italic text-center">
              Responsible catch and release ensures future generations can enjoy this incredible fishery
            </p>
          </div>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6 border-b-2 border-[#D59633] pb-2">
            Your Manatee River Fishing Experience
          </h2>

          <p className="mb-6">
            Fishing the Manatee River with Off The Dock Charters offers more than just catching fish. It's an opportunity to experience Florida's natural beauty while targeting some of the area's most prized species.
          </p>

          <p className="mb-4">What sets our river trips apart:</p>
          <ul className="mb-6 space-y-2">
            <li><strong>Exclusive access</strong> to productive spots most anglers never see</li>
            <li><strong>Multiple species opportunities</strong> in a single trip</li>
            <li><strong>Peaceful settings</strong> away from crowded fishing areas</li>
            <li><strong>Educational experiences</strong> about local ecosystems</li>
            <li><strong>Photography opportunities</strong> in pristine natural settings</li>
          </ul>

          <p className="mb-8">
            Whether you're targeting trophy snook around mangrove points, sight-fishing for redfish in shallow creeks, or hoping for an encounter with tarpon, the Manatee River delivers fishing experiences you'll remember long after your trip ends.
          </p>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#D59633] to-[#c08629] rounded-lg p-8 text-center my-12">
            <h3 className="text-2xl font-bold text-black mb-4">
              Discover the Manatee River's Hidden Treasures
            </h3>
            <p className="text-black/80 mb-6 max-w-2xl mx-auto">
              Ready to experience Bradenton's best-kept fishing secret? Book your Manatee River charter today and discover why this backcountry gem consistently produces some of our biggest fish and happiest clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors font-medium"
              >
                Book Your River Adventure
              </Link>
              <Link
                href="/contact"
                className="border-2 border-black text-black px-8 py-3 rounded-md hover:bg-black hover:text-white transition-colors font-medium"
              >
                Call for Availability
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="container mx-auto px-4 py-12 max-w-6xl">
        <h3 className="text-2xl font-bold mb-8 text-white">Related Articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 rounded-lg p-6">
            <h4 className="text-lg font-bold mb-3">
              <Link href="/blog/seasonal-fishing-bradenton" className="text-[#D59633] hover:text-[#c08629]">
                Following the Fish: Why the Best Bradenton Charters Move with the Seasons
              </Link>
            </h4>
            <p className="text-gray-400 text-sm">
              Discover how seasonal patterns affect fishing success across all Bradenton waters...
            </p>
          </div>
          <div className="bg-gray-900 rounded-lg p-6">
            <h4 className="text-lg font-bold mb-3">
              <Link href="/blog" className="text-[#D59633] hover:text-[#c08629]">
                Bradenton Fishing Guide: Year-Round Calendar for Inshore Species
              </Link>
            </h4>
            <p className="text-gray-400 text-sm">
              Complete monthly breakdown of what to catch around Bradenton...
            </p>
          </div>
          <div className="bg-gray-900 rounded-lg p-6">
            <h4 className="text-lg font-bold mb-3">
              <Link href="/tips" className="text-[#D59633] hover:text-[#c08629]">
                Winter Fishing in Bradenton: Why Cold Weather Means Hot Fishing Action
              </Link>
            </h4>
            <p className="text-gray-400 text-sm">
              Learn why winter brings some of the year's best fishing opportunities...
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
