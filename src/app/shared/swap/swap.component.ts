import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'psclone-swap',
  templateUrl: './swap.component.html',
  styleUrls: ['./swap.component.css']
})
export class SwapComponent implements OnInit {
  active = 1;
  element1!: string;
  element2!: string;

  constructor() { }

  ngOnInit(): void {
    this.alternateBorder();
  }

  alternateBorder() {
    const element1 = document.getElementById("pills-exc-tab");
    const element2 = document.getElementById("pills-liq-tab");

    element2!.addEventListener('click', function () {
      element2!.classList.add('green-b', 'secondary-v');
      element1!.classList.remove("green-b", 'secondary-v');
    })

    element1!.addEventListener('click', function () {
      element1!.classList.add('green-b', 'secondary-v');
      element2!.classList.remove("green-b", 'secondary-v');
    })
  }
}
