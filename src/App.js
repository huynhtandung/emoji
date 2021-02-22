import React, { PureComponent } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";
import filterEmoji from "./filterEmoji";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", 20),
      value: ""
    };
  }

  handleSearchChange = event => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20),
      value: event.target.value
    });
  };

  getSymbol = (symbol) => {
    const newValue = `${this.state.value}${symbol}`
    this.setState({
      value: newValue
    })
    console.log(symbol)
  }

  render() {
    return (
      <div>
        <Header />
        <SearchInput value={this.state.value} textChange={this.handleSearchChange} />
        <EmojiResults emojiData={this.state.filteredEmoji} getSymbol={this.getSymbol} />
      </div>
    );
  }
}
