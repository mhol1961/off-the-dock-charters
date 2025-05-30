# PowerShell Compatibility Rules

## COMMAND SYNTAX REQUIREMENTS

### 1. NO BASH-STYLE CHAINING
- **FORBIDDEN**: `command1 && command2`
- **REQUIRED**: Execute commands separately
- **REASON**: PowerShell uses different operators

### 2. POWERSHELL OPERATORS
- Use `;` for command separation (not `&&`)
- Use `|` for piping (same as bash)
- Use `-and`, `-or` for logical operations
- Use proper PowerShell variable syntax: `$variable`

### 3. FILE OPERATIONS
- Use PowerShell cmdlets when possible:
  - `Get-ChildItem` instead of `ls`
  - `Copy-Item` instead of `cp`
  - `Remove-Item` instead of `rm`
  - `New-Item` instead of `touch`

### 4. PATH HANDLING
- Use backslashes `\` or forward slashes `/` (PowerShell accepts both)
- Escape spaces in paths with quotes: `"path with spaces"`
- Use PowerShell path variables: `$env:USERPROFILE`

### 5. ENVIRONMENT VARIABLES
- Access with `$env:VARIABLE_NAME`
- Set with `$env:VARIABLE_NAME = "value"`
- List all with `Get-ChildItem env:`

### 6. SAFE COMMAND PATTERNS
```powershell
# Safe git operations
git status
git add "specific-file.tsx"
git commit -m "descriptive message"
git push origin branch-name

# Safe file operations
Get-ChildItem -Path "src/" -Recurse
Copy-Item "source.txt" "destination.txt"
New-Item -ItemType Directory -Path "new-folder"

# Safe npm operations
npm install
npm run build
npm run dev
```

### 7. FORBIDDEN PATTERNS
```bash
# NEVER use these in PowerShell
git add . && git commit -m "message" && git push
npm install && npm run build
cd directory && command
```

### 8. TESTING COMMANDS
- Always test commands in PowerShell before execution
- Use `Get-Command` to verify command availability
- Use `Get-Help` for command syntax verification

### 9. ERROR HANDLING
- Check `$?` for last command success
- Use `$Error[0]` to view last error
- Use `try/catch` blocks for complex operations

### 10. BEST PRACTICES
- Use full parameter names for clarity
- Quote all file paths with spaces
- Use relative paths from current working directory
- Verify current location with `Get-Location`

---
*Last Updated: May 30, 2025*
*Version: 1.0*
