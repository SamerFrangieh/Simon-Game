# Simon Game

## Overview

This Simon Game is a web-based implementation of the classic memory game where players must mimic an increasingly long sequence of colors and sounds. The game uses HTML, CSS, and JavaScript to create an interactive and visually appealing experience.

## Technologies Used

### HTML
- **Structure**: HTML is used to create the basic structure of the game interface, including the title, buttons, and container elements.
- **Integration**: The HTML file integrates the CSS for styling and the JavaScript for game logic through `<link>` and `<script>` tags.

### CSS
- **Styling**: CSS is used to style the game interface, providing visual appeal with colors, fonts, and layout.
- **Animations**: CSS classes are used to create animations for button presses and game-over effects.

### JavaScript
- **Game Logic**: JavaScript handles the core game logic, including generating random sequences, checking user input, and updating the game state.
- **Event Handling**: JavaScript manages user interactions by listening for button clicks and keyboard presses.
- **Sound Effects**: JavaScript plays sound files to provide auditory feedback for button presses and game-over events.

### jQuery
- **DOM Manipulation**: jQuery simplifies DOM manipulation, making it easier to add and remove classes, handle events, and update content dynamically.
- **Event Listeners**: jQuery is used to set up event listeners for button clicks and keyboard presses.

### Audio Files
- **Feedback Sounds**: Audio files provide sound feedback for button presses and incorrect inputs, enhancing the user experience with auditory cues.

## How to Play

1. **Start the Game**: Press any key to start the game. The game will display "Press A Key to Start" on the screen initially.
2. **Follow the Sequence**: The game will highlight a button in the sequence. Click the buttons in the same order as the game highlights them.
3. **Level Up**: Each time you successfully complete the sequence, you will advance to the next level, where an additional step is added to the sequence.
4. **Game Over**: If you press the wrong button, the game will play a "wrong" sound, display a "Game Over" message, and prompt you to restart by pressing any key.

