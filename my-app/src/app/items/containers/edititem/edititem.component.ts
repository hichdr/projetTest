import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../../shared/models/item.model';

@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.css']
})
export class EdititemComponent implements OnInit {
  item: Item;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      this.item = data['item'];
    });
    // souscrire dans le router l'item transmis par mon resolve
    // c'est cette valeur récupérée ici que je bind avec l'@Input qui va se trouver dans formComponent
  }

}
