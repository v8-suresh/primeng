import {Component,OnInit} from '@angular/core';
import {Car} from '../../components/domain/car';
import {CarService} from '../../service/carservice';
import {GotDataService} from "../../service/gotservice";

@Component({
    templateUrl: './datatablecomplexdemo.html'
})
export class DataTableComplexDemo implements OnInit {

    // reportData: any;
  reportData: any = {
    famData: [
      "PARENT", "SIBLING"
    ],
    famDetailData: [{
      key: "BLADE", label: "^"
    }, {
      key: "CHALICE", label: "v"
    }],
    data: [{
      "name": "Arya Stark",
      "birthPlace": "Winterfell",
      "livingIn": "Winterfell",
      "skill": "Faceless",
      "alive": "YES",
      "PARENT-BLADE": "Ned Stark",
      "PARENT-CHALICE": "Catelyn Stark",
      "SIBLING-BLADE": "Brann,Robb..",
      "SIBLING-CHALICE": "Sansa"
    }, {
      "name": "John Snow",
      "birthPlace": "Winterfell",
      "livingIn": "Winterfell",
      "skill": "Faceless",
      "alive": "YES",
      "PARENT-BLADE": "Rhaeger",
      "PARENT-CHALICE": "Lyanna",
      "SIBLING-BLADE": "Brann,Robb..",
      "SIBLING-CHALICE": "Sansa"
    }, {
      "name": "Jorah Mormant",
      "birthPlace": "???",
      "livingIn": "???",
      "skill": "???",
      "alive": "YES",
      "PARENT-BLADE": "Jeor Mormont",
      "PARENT-CHALICE": "???",
      "SIBLING-BLADE": "???",
      "SIBLING-CHALICE": "???"
    }, {
      "name": "Jaime Lannister",
      "birthPlace": "???",
      "livingIn": "Kings Landing",
      "skill": "Knight",
      "alive": "YES",
      "PARENT-BLADE": "Tywin",
      "PARENT-CHALICE": "???",
      "SIBLING-BLADE": "tyrion",
      "SIBLING-CHALICE": "cercei"
    },{
      "name": "Arya Stark",
      "birthPlace": "Winterfell",
      "livingIn": "Winterfell",
      "skill": "Faceless",
      "alive": "YES",
      "PARENT-BLADE": "Ned Stark",
      "PARENT-CHALICE": "Catelyn Stark",
      "SIBLING-BLADE": "Brann,Robb..",
      "SIBLING-CHALICE": "Sansa"
    }, {
      "name": "John Snow",
      "birthPlace": "Winterfell",
      "livingIn": "Winterfell",
      "skill": "Faceless",
      "alive": "YES",
      "PARENT-BLADE": "Rhaeger",
      "PARENT-CHALICE": "Lyanna",
      "SIBLING-BLADE": "Brann,Robb..",
      "SIBLING-CHALICE": "Sansa"
    }, {
      "name": "Jorah Mormant",
      "birthPlace": "???",
      "livingIn": "???",
      "skill": "???",
      "alive": "YES",
      "PARENT-BLADE": "Jeor Mormont",
      "PARENT-CHALICE": "???",
      "SIBLING-BLADE": "???",
      "SIBLING-CHALICE": "???"
    }, {
      "name": "Jaime Lannister",
      "birthPlace": "???",
      "livingIn": "Kings Landing",
      "skill": "Knight",
      "alive": "YES",
      "PARENT-BLADE": "Tywin",
      "PARENT-CHALICE": "???",
      "SIBLING-BLADE": "tyrion",
      "SIBLING-CHALICE": "cercei"
    }]
  };


    constructor(private carService: CarService, private gotService: GotDataService) { }

    ngOnInit() {
        // this.reportData = this.gotService.getGotCharacters().then(data => this.reportData = data)
    }

}
