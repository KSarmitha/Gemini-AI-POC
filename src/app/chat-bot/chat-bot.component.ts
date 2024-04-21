import { Component, signal } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss']
})
export class ChatBotComponent {
  protected searchText = signal<string>("");
  protected searchResults = signal<string>("");
  protected loadingStarted = false;

  async run() {
    const genAI = new GoogleGenerativeAI(environment.apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const prompt = this.searchText();
    this.loadingStarted = true;

    // const result = await model.generateContent(prompt);
    // const response = await result.response;
    // this.loadingStarted.set(false);
    // const text = response.text();
    // this.searchResults.set(text);
    // console.log(text);

    const result = await model.generateContentStream(prompt);
    let response = '';
    this.loadingStarted = false;
    for await(const chunk of result.stream){
      response += chunk.text();
      this.searchResults.set(response);
    }
    
  }

  searchResult(text: string){
    this.searchText.set(text);
    this.searchResults.set('');
    this.run();
  }
}
