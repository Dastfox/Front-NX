import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';

import { LinkRepository } from '@front-nx/link/state';
import { Link } from '@front-nx/link/state';
import { LinkStateService } from 'libs/link/state/src/lib/link-state.service';

@Component({
  selector: 'front-nx-link-create',
  templateUrl: './link-create.component.html',
  styleUrls: ['./link-create.component.css'],
})
export class LinkCreateComponent {
  links: Link[] = [];
  public rng: Guid;
  public rnd: string;
  constructor(
    public linkRepository: LinkRepository,
    public linkStateService: LinkStateService
  ) {
    this.rng = Guid.create();
    this.rnd = this.rng.toString();
  }

  ngOnInit(): void {}

  addLink(url: string): void {
    url = url.trim();
    if (!url) {
      return;
    }
    const newLink: Link = {
      url,
      id: this.rnd,

    };
    this.linkRepository.addLink(newLink);
  }
}
