import { Application, Sprite } from 'pixi.js';

export function MainMenu(app: Application<HTMLCanvasElement>) {
    return new Promise<void>((resolve) => {   
        const startButton:Sprite = Sprite.from("start-button.png");
        startButton.anchor.set(0.5);
        startButton.x = app.stage.width / 2;
        startButton.y = app.stage.height / 2;
        app.stage.addChild(startButton);
        startButton.eventMode = "static";
        startButton.on("pointerdown", () => {
            resolve();
        });
    })
}
