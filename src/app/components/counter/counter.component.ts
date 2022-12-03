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
  isMouseDown: boolean = false;
  isMouseDownForLongTime: boolean = false;
  isMouseUpEventTriggered: boolean = false;
  longPressIntervalTriggered: boolean = false;

  // Inputs 
  @Input('btnClasses') buttonStyleClasses: string | undefined = "btn-primary";
  @Input('value') count: number = 0;
  @Input() steps: number = 1;

  // Outputs: Event emitters 
  @Output('value') onCountChange: EventEmitter<number>;

  /**
   * Validate the value of the counter and change it.
   * @param newValue the new value of the counter.
   * @returns {void} returns nothing.
   */
  changeValue(newValue: number): void {
    if (this.count <= 0 && newValue < 0)
      return this.setCount(0);

    if (this.count >= 100 && newValue > 0)
      return this.setCount(100)

    this.setCount(this.count += newValue)
    this.onCountChange.emit(this.count);
  }

  /**
   * Set the value of the counter.
   * @param countValue the new value of the counter.
   * @returns {void} returns nothing.
   */
  private setCount(countValue: number): void {
    this.count = countValue;
  }

  /**
   * Check if the counter progress is valid.
   * @returns {boolean} returns true if the progress is valid, otherwise returns false.
   */
  isProgressInvalid(): boolean {
    return this.count < 0 || this.count > 100;
  }

  /**
   * Change the value of the counter when the user clicks on the button.
   * If the user clicks and holds the button, the value of the counter will 
   * change every 350 milliseconds.
   * @param newValue the new value of the counter.
   * @returns {void} returns nothing.
   */
  onMouseDown(newValue: number): void {
    this.changeValue(newValue);
    this.isMouseDown = true;
    this.startMouseDownTimer(newValue);
  }

  /**
   * Start a timer to check if the user is holding the mouse button for a long time.
   * @param newValue the new value of the counter.
   * @returns {void} returns nothing.
   */
  private startMouseDownTimer(newValue: number): void {
    setTimeout(() => {
      if (!this.isMouseDown) return;
      this.isMouseDownForLongTime = true;
      this.activateCountInterval(newValue);
    }, 200);
  }

  /**
   * Activate the counter interval that will change the value
   * of the counter every 350 milliseconds.
   * @param newValue the new value of the counter.
   * @returns {void} returns nothing.
   */
  private activateCountInterval(newValue: number): void {
    this.counterInterval = setInterval(() => {
      if (this.isMouseDownForLongTime)
        this.changeValue(newValue);
    }, 350);
  }

  /**
   * Stop the counter interval when the user releases the mouse button.
   * @returns {void} returns nothing.
   */
  onMouseUp(): void {
    this.isMouseDown = false;
    this.isMouseDownForLongTime = false;
    clearInterval(this.counterInterval);
  }

  constructor() {
    this.onCountChange = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

}
