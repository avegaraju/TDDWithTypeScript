class Rectangle {
    private breadth: number;
    private length: number;

    constructor(length: number, breadth: number) {
        this.breadth = breadth;
        this.length = length;
    }

    calculateArea(): number {
        return this.length * this.breadth;
    }
}