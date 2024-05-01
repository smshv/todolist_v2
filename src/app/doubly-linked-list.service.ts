import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoublyLinkedList {
  nodes: Array<{value: any, next: any, previous: any}>;
  constructor() {
    this.nodes = [];
  }
  get size() {
    return this.nodes.length;
  }

  get head() {
    return this.size ? this.nodes[0] : null;
  }

  get tail() {
    return this.size ? this.nodes[this.size - 1] : null;
  }
  insertAt(index: number, value: any) : void{
    const previousNode = this.nodes[index - 1] || null;
    const nextNode = this.nodes[index] || null;
    const node = { value, next: nextNode, previous: previousNode };

    if (previousNode) previousNode.next = node;
    if (nextNode) nextNode.previous = node;
    this.nodes.splice(index, 0, node);
  }
  removeAt(index: number) :void {
    const previousNode = this.nodes[index - 1] || null;
    const nextNode = this.nodes[index + 1] || null;

    if (previousNode) previousNode.next = nextNode;
    if (nextNode) nextNode.previous = previousNode;

    this.nodes.splice(index, 1);
  }

  push(...values: any) : void {
    for ( const val of values){
      this.insertAt(this.size, val);
    }
  }
  *[Symbol.iterator]() {
    yield* this.nodes;
  }
}
