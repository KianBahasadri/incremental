import { Container } from 'pixi.js';
import { Component } from './components';

export class CircuitBoard extends Container {
    private readonly rows: number;
    private readonly columns: number;
    private board: Component[][];

    constructor(rows: number, columns:number) {
        super()
        this.rows = rows;
        this.columns = columns;
        this.board = this.initializeBoard();

    }
    
    public addComponent(row: number, column: number, component: Component): void{
        this.board[row][column] = component;
    } 

    private initializeBoard(): Component[][] {
        let initboard: Component[][] = new Array(this.columns);  // Initialize the outer array with the height
        for (let i = 0; i < this.columns; i++) {
            initboard[i] = new Array(this.rows).fill(null);  // Initialize each row with 0s
        }
        return initboard;
    }
}