import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface ImageAlbum {
  src: string;
  caption: string;
}

@Component({
  standalone: true,
  selector: 'app-storia-page',
  imports: [RouterLink, CommonModule],
  templateUrl: './storia-page.component.html',
  styleUrls: ['./storia-page.component.scss']
})
export class StoriaPageComponent implements OnInit {
  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;

  scaviAlbum: ImageAlbum[] = [];
  ostiaAlbum: ImageAlbum[] = [];

  lightboxOpen = false;
  currentImage = '';
  currentCaption = '';
  currentIndex = 0;
  currentAlbum: ImageAlbum[] = [];
  isAnimating = false;

  isPlaying = true;
  isMuted = false;

  ngOnInit() {
    const scaviTitles = [
      'Castello Giulio II',
      'Scavi archeologici - via dei mulini',
      'Scavi archeologici - il Teatro',
      'Scavi archeologici - casa di Diana',
      'Scavi archeologici - il Mercato',
      'Scavi archeologici - le Terme',
      'Cap',
      'Cap 1',
      'Cap2',
      'Cap3',
      'Cap4',
      'Scavi archeologici - Thermopolium'
    ];

    const ostiaTitles = [
      'Corriera',
      'Ostricaro',
      'Spiagga',
      'Frutti di mare',
      'Panettone 1',
      'Stazione',
      'Panettone 2',
      'Castelfusano',
      'Scavi',
      'Scavi 2',
      'Veduta aerea',
      'Piazza stazione',
      'Panettone 3',
      'Stazione 3',
      'Via del mare'
    ];

    for (let i = 1; i <= 12; i++) {
      const src = `assets/scavi_${i.toString().padStart(2, '0')}.jpg`;
      this.scaviAlbum.push({
        src: src,
        caption: scaviTitles[i - 1]
      });
    }

    for (let i = 1; i <= 15; i++) {
      const src = `assets/ostia_${i.toString().padStart(2, '0')}.jpg`;
      this.ostiaAlbum.push({
        src: src,
        caption: ostiaTitles[i - 1]
      });
    }
  }

  openLightbox(index: number, album: ImageAlbum[], event: MouseEvent): void {
    const thumbnail = event.currentTarget as HTMLElement;
    const rect = thumbnail.getBoundingClientRect();

    this.currentAlbum = album;
    this.currentIndex = index;
    this.currentImage = album[index].src;
    this.currentCaption = album[index].caption;
    this.lightboxOpen = true;
    this.isAnimating = true;
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      const lightboxImg = document.querySelector('.lightbox-content img') as HTMLElement;
      if (lightboxImg) {
        const offsetX = rect.left + rect.width / 2 - window.innerWidth / 2;
        const offsetY = rect.top + rect.height / 2 - window.innerHeight / 2;
        const scale = rect.width / (window.innerWidth * 0.9);

        lightboxImg.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
        lightboxImg.style.opacity = '0';

        requestAnimationFrame(() => {
          lightboxImg.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
          lightboxImg.style.transform = 'translate(0, 0) scale(1)';
          lightboxImg.style.opacity = '1';

          setTimeout(() => {
            this.isAnimating = false;
          }, 400);
        });
      }
    });
  }

  closeLightbox(): void {
    if (this.isAnimating) return;

    const lightboxImg = document.querySelector('.lightbox-content img') as HTMLElement;
    if (lightboxImg) {
      lightboxImg.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
      lightboxImg.style.transform = 'scale(0.8)';
      lightboxImg.style.opacity = '0';
    }

    setTimeout(() => {
      this.lightboxOpen = false;
      document.body.style.overflow = '';

      if (lightboxImg) {
        lightboxImg.style.transition = 'none';
        lightboxImg.style.transform = 'translate(0, 0) scale(1)';
        lightboxImg.style.opacity = '1';
      }
    }, 300);
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.currentAlbum.length;
    this.currentImage = this.currentAlbum[this.currentIndex].src;
    this.currentCaption = this.currentAlbum[this.currentIndex].caption;
  }

  prevImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.currentAlbum.length) % this.currentAlbum.length;
    this.currentImage = this.currentAlbum[this.currentIndex].src;
    this.currentCaption = this.currentAlbum[this.currentIndex].caption;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!this.lightboxOpen) return;

    if (event.key === 'Escape') {
      this.closeLightbox();
    } else if (event.key === 'ArrowRight') {
      this.nextImage();
    } else if (event.key === 'ArrowLeft') {
      this.prevImage();
    }
  }

  togglePlay(): void {
    const video = this.heroVideo.nativeElement;
    if (this.isPlaying) {
      video.pause();
      this.isPlaying = false;
    } else {
      video.play();
      this.isPlaying = true;
    }
  }

  toggleMute(): void {
    const video = this.heroVideo.nativeElement;
    video.muted = !video.muted;
    this.isMuted = video.muted;
  }
}
