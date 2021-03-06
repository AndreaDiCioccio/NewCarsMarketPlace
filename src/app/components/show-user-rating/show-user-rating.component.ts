import { environment, imagesUrl } from './../../../environments/environment';
import { User, UserRating, Rating } from './../../interfaces';
import { Component, Input, OnInit } from '@angular/core';



@Component({
    selector: 'app-show-user-rating',
    templateUrl: './show-user-rating.component.html',
    styleUrls: ['./show-user-rating.component.css']
})
export class ShowUserRatingComponent implements OnInit{

    @Input() rating:Rating = null
    @Input() username:string

    yellowStar:string = imagesUrl + "yellow-star.jpg";
    midStar:string = imagesUrl + "mid-star.jpg";
    greyStar:string = imagesUrl + "grey-star.jpg";
    
    ratingArray:string[] = new Array;
    
    ngOnInit():void{

        this.buildRatingsStars()

    }

    // costruisce l'array che serve per mostrare le stellette con gli url delle immagini
    buildRatingsStars():void{

        let ratingArray:string[] = new Array;

        if(this.rating.value == 0){

            for(let k=0;k<=4;k++){
                ratingArray[k] = this.greyStar;
            }

            this.ratingArray = ratingArray

        }else{

            let rating = this.rating.value
            
            let trunc = Math.trunc(rating);
                    
            for(let j=0;j<trunc+1;j++){
        
                if(rating>j && rating<j+1){
                    ratingArray[j] = this.midStar;
                }else {
                    if(j!=trunc){
                        ratingArray[j] = this.yellowStar;
                    }
                }
            
            }
        
            if (rating == Math.floor(rating)){
                for(let k=trunc;k<=4;k++){
                ratingArray[k] = this.greyStar;
                }
            } else {
                for(let k=trunc+1;k<=4;k++){
                ratingArray[k] = this.greyStar;
                }
            }

            this.ratingArray = ratingArray

        }

    }

}
