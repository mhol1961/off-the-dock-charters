# GitHub Safety Rules for OFFtheDockCharters

## CRITICAL SAFETY PROTOCOLS

### 1. NEVER USE COMMAND CHAINING
- **FORBIDDEN**: Never use `&&` in any terminal commands (PowerShell incompatible)
- **REQUIRED**: Use separate individual commands only
- **EXAMPLE**: 
  - ❌ `git add . && git commit -m "message" && git push`
  - ✅ `git add specific-file.tsx` → wait → `git commit -m "message"` → wait → `git push`

### 2. GIT OPERATION SAFETY
- **ALWAYS** run `git status` before any git operation
- **NEVER** use `git add .` or `git add -A` (stage specific files only)
- **ALWAYS** create backup branch before major changes: `git checkout -b backup-YYYYMMDD-HHMM`
- **NEVER** run `git pull` without explicit user confirmation
- **ALWAYS** verify working directory is clean before switching branches

### 3. PRE-COMMIT VERIFICATION
Before any commit:
1. Run `git status` to review changes
2. Run `git diff` to review specific changes
3. Verify only intended files are staged
4. Confirm commit message is descriptive
5. Check that no sensitive data (API keys, passwords) is included

### 4. PRE-PUSH VERIFICATION
Before any push:
1. Confirm correct remote repository: `git remote -v`
2. Confirm correct branch: `git branch --show-current`
3. Review commit history: `git log --oneline -5`
4. Verify no merge conflicts exist
5. Ensure local tests pass (if applicable)

### 5. POWERSHELL COMPATIBILITY
- Use PowerShell-native commands only
- No bash-style command chaining
- Use proper PowerShell syntax for file operations
- Test commands in PowerShell environment before execution

### 6. BACKUP PROCEDURES
- **ALWAYS** create backup branch before major refactoring
- **NEVER** force push to main/master branch
- Keep local backup copies of critical files before major changes
- Use descriptive branch names: `feature/description` or `fix/issue-description`

### 7. REPOSITORY INTEGRITY
- **NEVER** rewrite published history
- **NEVER** use `git reset --hard` on shared branches
- **ALWAYS** use `git revert` for undoing published commits
- Verify `.gitignore` is properly configured before first commit

### 8. EMERGENCY PROCEDURES
If something goes wrong:
1. **STOP** all git operations immediately
2. Create backup of current state: `git stash push -m "emergency-backup"`
3. Document the issue and current state
4. Seek help before proceeding with recovery

### 9. REQUIRED CONFIRMATIONS
These operations require explicit user confirmation:
- Any `git push` command
- Any `git pull` command
- Any `git merge` command
- Any `git reset` command
- Any `git rebase` command
- Deleting branches
- Force operations (`-f` or `--force`)

### 10. FILE STAGING RULES
- Stage files individually by name
- Review each staged file with `git diff --cached filename`
- Never stage entire directories without review
- Exclude build artifacts, node_modules, .env files
- Verify .gitignore is working properly

## IMPLEMENTATION NOTES
- These rules apply to ALL git operations in this project
- Cline must follow these rules without exception
- User confirmation required for any rule exceptions
- Regular backup branches should be created weekly
- All team members must follow these protocols

## EMERGENCY CONTACTS
- Project Owner: [Your contact information]
- Repository Admin: [Admin contact]
- Backup Location: [Backup repository URL if applicable]

---
*Last Updated: May 30, 2025*
*Version: 1.0*
