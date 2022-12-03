import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: [
    '../../../assets/css/pages/file-upload.css',
  ]
})
export class CounterComponent implements OnInit {

  // Properties
  counterInterval!: ReturnType<typeof setInterval>;
  isMouseUpEventTriggered: boolean = false;
  longPressIntervalTriggered: boolean = false;
  isMouseDown: boolean = false;
  isMouseDownForLongTime: boolean = false;

  // Inputs 
  @Input('value') count: number = 0;
  @Input() steps: number = 1;
  @Input('btnClasses') buttonStyleClasses: string | undefined = "btn-primary";

  // Outputs: Event emitters 
  @Output('value') onCountChange: EventEmitter<number>;

  /**
   * Change the value of the counter when the user clicks on the buttons.
   * @param this.steps the new value of the counter.
   * @returns {void} returns nothing.
   */
  changeValue(newValue: number): void {
    if (this.count <= 0 && newValue < 0) {
      this.count = 0;
    } else if (this.count >= 100 && newValue > 0) {
      this.count = 100;
    } else {
      this.count += newValue;
    }

    this.onCountChange.emit(this.count);
  }

  //change the value of the counter when the button is pressed for a long time
  changeValueOnLongPress() {
    this.count += this.steps;
  }

  finallyAddValue() {
    if (this.steps > 0) {
      this.count = (this.count - 1);
    } else {
      this.count = (this.count + 1);
    }
    this.onCountChange.emit(this.count);
  }

  /**
   * Check if the counter progress is valid.
   * @returns {boolean} returns true if the progress is valid, otherwise returns false.
   */
  isProgressInvalid() {
    return this.count < 0 || this.count > 100;
  }

  /**
   * Continue to change the value of the counter when the user holds the mouse button down.
   * @returns {void} returns nothing.
   */
  onMouseDown(newValue: number): void {
    this.changeValue(newValue);
    this.isMouseDown = true;
    this.startMouseDownTimer(newValue);
  }

  startMouseDownTimer(newValue: number) {
    setTimeout(() => {
      if (!this.isMouseDown) return;
      this.isMouseDownForLongTime = true;
      this.activateCountInterval(newValue);
    }, 200);
  }

  activateCountInterval(newValue: number): void {
    this.counterInterval = setInterval(() => {
      if (this.isMouseDownForLongTime)
        this.changeValue(newValue);
    }, 350);
  }

  /**
   * Stop changing the value of the counter when the user releases the mouse button.
   * @returns {void} returns nothing.
   */
  onMouseUp(): void {
    this.isMouseDown = false;
    this.isMouseDownForLongTime = false;
    clearInterval(this.counterInterval);
  }

  /**
   * Control the value of the counter when the user uses the keyboard.
   */
  onModelChange() {
    if (this.count > 100) this.count = 100;
    else if (this.count < 0) this.count = 0;
    else this.count = this.steps;

    this.onCountChange.emit(this.count);
  }

  constructor() {
    this.onCountChange = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

}
