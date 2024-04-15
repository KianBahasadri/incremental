import { Application, Sprite } from 'pixi.js';

export function MainMenu(app: Application) {
    const startButton:Sprite = Sprite.from("start-button.png");
    startButton.anchor.set(0.5);
    startButton.x = app.screen.width/2;
    startButton.y = app.screen.height/2;
    app.stage.addChild(startButton);
    startButton.eventMode = "static";
    startButton.on("pointerdown", exitMainMenu);
    function exitMainMenu() {
        app.stage.removeChild(startButton);
    }
}
