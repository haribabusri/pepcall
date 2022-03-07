import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionManagementService {

  constructor() { }
  sessions: any = [];
  // this is not required if api is ready , just showing some dummy data on screen using this 
  setDefaultSessions() {
    // for (let i = 0; i <= 5; i++) {
    //   this.sessions.push({name:'Meeting'+i, deckType:'type'+i, id:i, stories:0})
    // }
  }
  getSessions() {
    // if api ready we need to call api to get sessions
    return this.sessions;
  }
  createSession(obj: any) {
    obj.userStories = [];
    this.sessions.push(obj)
  }
  deleteSession(index: any) {
    this.sessions.splice(index, 1)
  }
  addLink(index: any, link: any) {
    this.sessions[index].link = link;
    this.sessions[index].isLinkActivated = true;
  }
  getUserStories(sessionIndex: any) {
    const id = parseInt(sessionIndex)
    const sendData = this.sessions[parseInt(sessionIndex)];
    return this.sessions[parseInt(sessionIndex)]?.userStories
  }
  addUserStory(sessionIndex: any, item: any) {
    item.storyPoints = {};
    this.sessions[parseInt(sessionIndex)].userStories.push(item);
    console.log(this.sessions)
  }
  updateUserStory(sesionIndex: any, storyIndex: any) {
    let seesion = this.sessions[sesionIndex]
    let userStorie = seesion.userStories[storyIndex];
    userStorie.isstarted = true;
  }
  updateVoteCount(sesionIndex: any, storyIndex: any) {
    let seesion = this.sessions[sesionIndex]
    let userStorie = seesion.userStories[storyIndex];
    if (userStorie.count) {
      userStorie.count = userStorie.count + 1;
    } else {
      userStorie.count = 1;
    }
  }
  addUserToSession(username: any, sesionIndex: any) {
    let seesion = this.sessions[sesionIndex]
    if (seesion.users) {
      seesion.users.push(username)
    } else {
      seesion.users = [username]
    }
  }
  addUserToPoints(username: any, sesionIndex: any, storyIndex: any, points: any) {
    let seesion = this.sessions[sesionIndex]
    let userStorie = seesion.userStories[storyIndex];
    userStorie.storyPoints[username] = points;
  }
  getSession(sesionIndex: any) {
    return this.sessions[sesionIndex];
  }
  approvedHours(sessionIndex: any, storyIndex: any, name: any, approvedHours: any) {
    console.log('approved hoursss');
    console.log(sessionIndex)
    this.sessions[sessionIndex].userStories[storyIndex].isApproveVote = true;
    this.sessions[sessionIndex].userStories[storyIndex].approvedPerson = name;
    this.sessions[sessionIndex].userStories[storyIndex].approvedHours = approvedHours;
    this.sessions[sessionIndex].userStories[storyIndex].isstoped = true;

    console.log('approved sessions');
    console.log(this.sessions)

  }
  deleteUserStory(sesionIndex: any, storyIndex: any) {
    let seesion = this.sessions[sesionIndex]
    seesion.userStories.splice(storyIndex, 1);
  }
  isSessionCanDelete(sessionIndex: any) {
    let sessionCount = 0;
    let seesion = this.sessions[sessionIndex]
    for (let storyItem of seesion.userStories) {
      if (storyItem.isstarted && !storyItem.isstoped) {
        sessionCount++;
      }
    }

    if (sessionCount > 0) {
      alert('You cant deleted as it is in active');
      return false
    } else {
      return true
    }
  }


}
