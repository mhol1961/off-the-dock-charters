# Cline Rules Configuration

This directory contains safety rules and guidelines for Cline AI assistant when working with this project.

## Files

### `github-safety.md`
Comprehensive GitHub safety protocols to protect your local codebase:
- Prevents destructive git operations
- Requires explicit confirmation for risky commands
- Enforces PowerShell-compatible command syntax
- Mandates backup procedures before major changes
- Provides emergency recovery procedures

### `powershell-rules.md`
PowerShell compatibility rules for Windows environments:
- Prevents bash-style command chaining (`&&`)
- Enforces PowerShell-native command syntax
- Provides safe command patterns
- Lists forbidden command patterns

## Key Safety Features

1. **No Command Chaining**: Prevents `&&` usage that's incompatible with PowerShell
2. **Explicit Confirmations**: Requires user approval for destructive operations
3. **Backup Procedures**: Mandates backup branches before major changes
4. **File Staging Safety**: Only allows specific file staging, never `git add .`
5. **Repository Integrity**: Prevents history rewriting and force pushes

## How It Works

Cline automatically references these rules when working in this project directory. The rules ensure:
- Your local codebase is protected from accidental loss
- All git operations are safe and reversible
- Commands are compatible with your PowerShell environment
- You maintain full control over repository changes

## Emergency Procedures

If something goes wrong:
1. Stop all git operations immediately
2. Create backup: `git stash push -m "emergency-backup"`
3. Document the issue
4. Seek help before proceeding

---
*Last Updated: May 30, 2025*
