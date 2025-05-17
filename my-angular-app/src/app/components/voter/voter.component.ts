import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VoteService } from 'src/app/services/vote.service';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.scss']
})
export class VoterComponent {
  @Input() name: string = '';
  @Output() voted = new EventEmitter<{ agreed: boolean, name: string }>();
  didVote = false;
  voteMessage = '';

 constructor(private voteService: VoteService) {}

  ngOnInit() {
    this.didVote = this.voteService.hasVoted(this.name);
    if (this.didVote) {
      const choice = this.voteService.getVote(this.name);
      this.voteMessage = `You already voted: ${choice ? 'Agree' : 'Disagree'}`;
    }
  }

  vote(agreed: boolean) {
    if (!this.didVote) {
      this.voted.emit({ agreed, name: this.name });
      this.didVote = true;
      this.voteMessage = `You voted: ${agreed ? 'Agree' : 'Disagree'}`;
    }
  }

}
