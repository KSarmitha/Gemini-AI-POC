import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { MarkdownPipe } from './shared/markdown.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChatBotComponent,
    MarkdownPipe
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
