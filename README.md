### Core Features to Implement (in order):

State Management (useState for checkboxes, password, etc.)

Password Generation Logic

Use string sets:

Lowercase: abcdefghijklmnopqrstuvwxyz

Uppercase: ABCDEFGHIJKLMNOPQRSTUVWXYZ

Numbers: 0123456789

Symbols: !@#$%^&\*()\_+[]{}<>?

Combine selected sets based on toggles.

Randomly build password using Math.random() or a crypto method.

Password Length Input (slider or number input)

Copy to Clipboard

Use navigator.clipboard.writeText()

Password Strength Meter

Optional: Use color-coded labels like “Weak”, “Moderate”, “Strong” based on length and variety.

### Ask yourself: “Where does this data live?” and “Who needs to know about it?”
