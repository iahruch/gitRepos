import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core'
import { RepoInterface } from '../../repos/types/repo.interface'
import { Store } from '@ngrx/store'
import { addToFavoritesAction } from '../modules/favorites/store/actions'

@Directive({
  selector: '[moreInfoTooltip]',
})
export class MoreInfoToolTipDirective implements OnInit {
  @Input('moreInfoTooltip') favoriteItem: RepoInterface

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private store: Store
  ) {}
  ngOnInit(): void {}

  @HostListener('click', ['$event']) clickMouse() {
    console.log('MoreInfoToolTipDirective', this.favoriteItem)

    let parentNode = this.el.nativeElement
      .closest('.inner_wrapper')
      .querySelector('.right')

    let divCard = this.renderer.createElement('div')
    this.renderer.addClass(divCard, 'card')

    //header
    let header = this.renderer.createElement('div')
    this.renderer.addClass(header, 'card-header')
    let headerH1 = this.renderer.createElement('h1')
    let headerH1Text = this.renderer.createText(this.favoriteItem.full_name)
    this.renderer.appendChild(headerH1, headerH1Text)
    this.renderer.appendChild(header, headerH1)

    let stars = this.renderer.createElement('div')
    this.renderer.addClass(stars, 'stars')

    let starsIcon = this.renderer.createElement('i')
    this.renderer.addClass(starsIcon, 'ion-ios-star')
    this.renderer.appendChild(stars, starsIcon)

    let starsSpan = this.renderer.createElement('span')
    starsSpan.innerHTML = this.favoriteItem.stargazers_count
    // let starsSpanText = this.renderer.createText(
    //   this.favoriteItem.stargazers_count
    // )
    this.renderer.appendChild(stars, starsSpan)
    this.renderer.appendChild(header, stars)

    //Content
    let content = this.renderer.createElement('div')
    this.renderer.addClass(content, 'card-content')

    let inner = this.renderer.createElement('div')
    this.renderer.addClass(inner, 'inner')

    let img = this.renderer.createElement('img')
    this.renderer.setAttribute(img, 'src', this.favoriteItem.owner.avatar_url)
    this.renderer.appendChild(inner, img)
    this.renderer.appendChild(content, inner)

    let nickName = this.renderer.createElement('div')
    this.renderer.addClass(nickName, 'nickName')

    let nickNameIcon = this.renderer.createElement('i')
    this.renderer.addClass(nickNameIcon, 'ion-ios-contact')
    this.renderer.appendChild(nickName, nickNameIcon)

    let nickNameSpan = this.renderer.createElement('span')
    let nickNameSpanText = this.renderer.createText(this.favoriteItem.name)
    this.renderer.appendChild(nickNameSpan, nickNameSpanText)
    this.renderer.appendChild(nickName, nickNameSpan)

    let desc = this.renderer.createElement('div')
    let descText = this.renderer.createText(this.favoriteItem.description)
    this.renderer.appendChild(desc, descText)
    this.renderer.addClass(desc, 'desc')

    this.renderer.appendChild(inner, nickName)
    this.renderer.appendChild(content, desc)

    //footer
    let footer = this.renderer.createElement('div')
    footer.classList.add('card-footer')
    let footerBtn = this.renderer.createElement('button')
    this.renderer.addClass(footerBtn, 'btn-add-fav') // mat-flat-button mat-button-base mat-primary

    this.renderer.setAttribute(footerBtn, 'color', 'primary')

    let footerBtnText = this.renderer.createText('Add from favorites')
    this.renderer.appendChild(footerBtn, footerBtnText) //(click)="removeFroFavorites(fav)"

    footer.appendChild(footerBtn)

    divCard.appendChild(header)
    divCard.appendChild(content)
    divCard.appendChild(footer)

    this.renderer.selectRootElement(parentNode)
    this.renderer.appendChild(parentNode, divCard)

    let btnAdd = this.el.nativeElement
      .closest('.inner_wrapper')
      .querySelector('.btn-add-fav')

    this.renderer.listen(btnAdd, 'click', (event: Event) => {
      console.log(event.target)
      const fav = {
        [this.favoriteItem.id]: {
          fullName: this.favoriteItem.full_name,
          ownerPhoto: this.favoriteItem.owner.avatar_url,
          starsCount: this.favoriteItem.stargazers_count,
          descRepo: this.favoriteItem.description,
        },
      }
      this.store.dispatch(addToFavoritesAction({ fav }))
    })
  }
}
