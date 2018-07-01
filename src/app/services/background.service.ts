import { Injectable } from '@angular/core';

declare const document: Document;
declare const window: Window;
@Injectable({
  providedIn: 'root'
})
export class BackgroundService {
path = 'https://source.unsplash.com';
wrapperClass = 'WrapperBgImage';
keyWords = ['nature', 'water', 'sun'];
wrapper: HTMLElement | null = null;
  constructor() { }

  public init() {
    // si no tengo creado el div contenedor lo creo
    if (!this.wrapper) {
      this.createWrapper();
    }
    // cargo la imagen de fondo
    this.setBackgroudImage();
  }
  public setKeyWords(weatherKeys: string[]) {
    // añado las keywords y recargo el background
    this.keyWords = weatherKeys;
    this.setBackgroudImage();
  }

  private createWrapper() {
    // creo el div que contine la imagen de fondo
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add(this.wrapperClass);
    document.body.appendChild(this.wrapper);
  }
  private setBackgroudImage() {
    // reviso las dimensiones del windows cada vez que cambio el fondo por si han cambiado las dimensiones del navegador
    const w = window.innerWidth;
    const h = window.innerHeight;

    // Construyo la ruta a la imagen
    const imageSrc = `${this.path}/${w}x${h}/?${this.keyWords.join()}`;

    // compruebo si el navegador adminte preload
    if ( this.isPreloadSupport()) {
      const link = document.createElement('link');
      link.setAttribute('rel', 'preload');
      link.setAttribute('as', 'image');
      link.setAttribute('href', imageSrc);
      link.onload = () => {
        // cambio la imagen cuando ha cargado para mejorar la transición
        this.wrapper.style.backgroundImage = `url(${imageSrc})`;
      };
      document.head.appendChild(link);
    } else {
      // si no entiende preload cargo la imagen directamente
      this.wrapper.style.backgroundImage = `url(${imageSrc})`;
    }
  }

  private isPreloadSupport (): boolean {
    // compruebo si 'preload' esta en la lista de soportados por el navegador
    // typescript todavía no entiene 'relList' por eso no utilizo ('link').relList.supp...
    return document.createElement('link')['relList'].supports('preload');
  }
}
