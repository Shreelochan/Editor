import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { AddArticleService } from '../add-article.service';
import { Article} from '../article';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css'],
  providers:[AddArticleService]
})
export class AddArticleComponent implements OnInit {
  articles:Article[];
  article:Article;
  body:String;
  editorForm:FormGroup;
  editorContent:string;
  

  constructor(private addArticleService:AddArticleService) { }

  addArticle(){
    const newArticle={
      body:this.body
    }
    this.addArticleService.addArticle(newArticle)
    .subscribe(article=>{
      this.articles.push(article)
    })
  }

  ngOnInit() { 
    this.addArticleService.getArticle()
    .subscribe(articles=>
      this.articles=articles)

      this.editorForm = new FormGroup({
        'editor': new FormControl(null)
      })   
      
  }
//   onSubmit(){
//     this.editorContent = this.editorForm.get('editor').value;
//     console.log(this.editorForm.get('editor').value);
//   //   var onway=this.articles.push(this.editorForm.get('editor').value)
//   //   console.log(this.articles)
//   //   console.log(onway)
  
//   }
}
