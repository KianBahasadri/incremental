import { Application, Sprite } from 'pixi.js';
//import { MainMenu } from './mainmenu';

const app = new Application<HTMLCanvasElement>({
    view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
    resolution: window.devicePixelRatio || 1,
    autoDensity: true,
    backgroundColor: 0x6495ed,
    width: innerWidth,
    height: innerHeight
});

/*
(async function() {
    await MainMenu(app);
});
*/


for (let i = 0; i < 10; i++)
{
    createBunny(Math.floor(Math.random() * app.screen.width), Math.floor(Math.random() * app.screen.height));
}

function createBunny(x: number, y: number)
{
    // Create our little bunny friend..
    const bunny = Sprite.from("and-gate.png");
    // Enable the bunny to be interactive... this will allow it to respond to mouse and touch events
    bunny.eventMode = 'static';

    // This button mode will mean the hand cursor appears when you roll over the bunny with your mouse
    bunny.cursor = 'pointer';

    // Center the bunny's anchor point
    bunny.anchor.set(0.5);

    // Make it a bit bigger, so it's easier to grab
    bunny.scale.set(0.5);

    // Setup events for mouse + touch using the pointer events
    bunny.on('pointerdown', onDragStart, bunny);

    // Move the sprite to its designated position
    bunny.x = x;
    bunny.y = y;

    // Add it to the stage
    app.stage.addChild(bunny);
}

let dragTarget: any = null;

app.stage.eventMode = 'static';
app.stage.hitArea = app.screen;
app.stage.on('pointerup', onDragEnd);
app.stage.on('pointerupoutside', onDragEnd);

function onDragMove(event: { global: any; })
{
    if (dragTarget)
    {
        dragTarget.parent.toLocal(event.global, null, dragTarget.position);
    }
}

function onDragStart(this: Sprite)
{
    // Store a reference to the data
    // * The reason for this is because of multitouch *
    // * We want to track the movement of this particular touch *
    this.alpha = 0.5;
    dragTarget = this;
    app.stage.on('pointermove', onDragMove);
}

function onDragEnd()
{
    if (dragTarget)
    {
        app.stage.off('pointermove', onDragMove);
        dragTarget.alpha = 1;
        dragTarget = null;
    }
}
