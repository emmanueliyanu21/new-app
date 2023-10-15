import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface selectedChannel {
  name?: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  @Output() newFilterEvent = new EventEmitter<selectedChannel>();

  sideNavWidth: string = '0';
  selectNewsChannelForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.selectNewsChannelForm = this.fb.group({
      newsChannel: ['', [Validators.required]],
    });
  }

  ngOnInit(): void { }
  openNav() {
    this.sideNavWidth = '100%';
  }

  closeNav() {
    this.sideNavWidth = '0';
  }

  links = [
    { name: 'Home', url: "/" },
    { name: 'Bookmarks', url: "/bookmarks" },
    { name: 'Subscribe', url: "/" },
  ]

  news = [
    { name: 'CNN', value: 'cnn' },
    { name: 'Bussiness Insider', value: 'business-insider' },
    { name: 'BBC News', value: 'bbc-news' },
    { name: 'Al Jazeera English', value: 'al-jazeera-english' },
    { name: 'ESPN', value: 'espn' },
    { name: 'National Geographic', value: 'national-geographic' },
    { name: 'TechCrunch', value: 'techcrunch' },
    { name: 'The Washington Post', value: 'associated-press' },
    { name: 'Reuters', value: 'reuters' },
    { name: 'Bloomberg', value: 'bloomberg' },
  ]
  selectedNews: string = '';

  selectNewsChannel(event: any) {
    if (this.selectNewsChannelForm.valid) {
      const selectedChannel = this.selectNewsChannelForm.get('newsChannel')?.value;
      this.newFilterEvent.emit(selectedChannel);
    }
    this.closeNav()
    this.router.navigate(['/']);
  }
}
