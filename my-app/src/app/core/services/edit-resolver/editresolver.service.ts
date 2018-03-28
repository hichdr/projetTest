import { Injectable } from '@angular/core';
import { Observable } from '@firebase/util';
import { Item } from '../../../shared/models/item.model';
import { Resolve, Router } from '@angular/router';
import { CollectionService } from '../collection/collection.service';

import 'rxjs/add/operator/take';

@Injectable()
export class EditresolverService implements Resolve<Observable<Item>> {

  constructor(
    private collectionService: CollectionService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item>  {
    const id = route.paramMap.get('id');
    return this.collectionService.getItem(id).take(1).map((data)) => {
      if (data) {
        return data;
      } else {
        this.router.navigate(['/items/list']);
        return null;
      }
    }
    // ici je dois récupérer l'item à l'aide de getItem()
    // faire un return de ce que me renvoie getItem() donc un observable qui contiendra un Item
    // cette donnee je la récupère sur EditComponent en souscrivant à l'observable params du router
  }

}
