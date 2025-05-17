import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VoteService } from 'src/app/services/vote.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  agreedVoters: string[] = [];
  disagreedVoters: string[] = [];

  constructor(private voteService: VoteService, private router: Router) {}

  ngOnInit() {
    this.agreedVoters = this.voteService.getAgreed();
    this.disagreedVoters = this.voteService.getDisagreed();
  }

  resetVotes() {
    this.voteService.reset();
    this.router.navigate(['/vote']);
  }

}
