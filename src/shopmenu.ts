import { Application, Sprite } from 'pixi.js'
import { Component } from './components';

export class ShopMenu extends Sprite {
    private open: boolean;
    private shift: number;
    public tab: Sprite;
    private components: Sprite[];

    constructor(app: Application) {
        super(Sprite.from("shop-background.png").texture);
        this.open = true;
        this.shift = app.screen.width / 6.4;
        this.x = app.screen.width - this.shift;
        this.y = 0;
        this.eventMode = "passive";
        this.tab = this.initializeTab();
        this.components = [];
    }

    public addComponent(component: Component) {
        let buyButton: Sprite = Sprite.from("buy.png");
        this.addChild(buyButton);
        this.components.push(buyButton);
        
        let componentImage: Sprite = new Sprite(component.texture);
        componentImage.setSize(50, 50);
        buyButton.addChild(componentImage);
        buyButton.y = this.components.length * 200;
        buyButton.x = 50;
        componentImage.x = 100;
    }

    private initializeTab(): Sprite{
        let tab: Sprite = Sprite.from("shop-button.png");
        this.addChild(tab);
        tab.x = -64;
        tab.eventMode = "static";
        tab.on("pointerdown", this.toggleShop.bind(this));
        return tab;
    }

    private toggleShop() {
        if (this.open) {
            this.open = false;
            this.x += this.shift;
        } else {
            this.open = true;
            this.x -= this.shift;
        }
    }
}