import { Component } from '@angular/core';
import { VoteService } from 'src/app/services/vote.service';

@Component({
  selector: 'app-vote-taker',
  templateUrl: './vote-taker.component.html',
  styleUrls: ['./vote-taker.component.scss']
})
export class VoteTakerComponent {
  agreed = 0;
  disagreed = 0;
  voters: string[] = ['Dr. IQ', 'Celeritas', 'Bombasto'];

  constructor(private voteService: VoteService) {}

  onVoted(agreed: boolean, name: string) {
    this.voteService.addVote(name, agreed);

  // Refresh counts
  this.agreed = this.voteService.getAgreed().length;
  this.disagreed = this.voteService.getDisagreed().length;
  }

}
