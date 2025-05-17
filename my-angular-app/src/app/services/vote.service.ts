import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  agreedVoters: string[] = [];
  disagreedVoters: string[] = [];
  votedMap: { [voterName: string]: boolean } = {};

  constructor() {
    const saved = localStorage.getItem('votedMap');
    if (saved) {
      this.votedMap = JSON.parse(saved);
      for (const [name, agreed] of Object.entries(this.votedMap)) {
        if (agreed) this.agreedVoters.push(name);
        else this.disagreedVoters.push(name);
      }
    }
  }

  private saveToStorage() {
    localStorage.setItem('votedMap', JSON.stringify(this.votedMap));
  }

  addVote(name: string, agreed: boolean) {
    if (this.votedMap[name] !== undefined) return; // Already voted

    this.votedMap[name] = agreed;
    if (agreed) this.agreedVoters.push(name);
    else this.disagreedVoters.push(name);
    this.saveToStorage();
  }

  hasVoted(name: string): boolean {
    return this.votedMap[name] !== undefined;
  }

  getVote(name: string): boolean | undefined {
    return this.votedMap[name];
  }

  getAgreed(): string[] {
    return this.agreedVoters;
  }

  getDisagreed(): string[] {
    return this.disagreedVoters;
  }

  reset() {
    this.agreedVoters = [];
    this.disagreedVoters = [];
    this.votedMap = {};
    localStorage.removeItem('votedMap');
  }
}

