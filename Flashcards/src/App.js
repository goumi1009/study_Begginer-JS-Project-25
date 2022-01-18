import AddForm from './components/AddForm.js';
import CardList from './components/CardList.js';
import Header from './components/Header.js';

export default function ({ targetEl }) {
  this.state = {
    isAddCard: false,
    cardList: [],
  };

  this.setState = (nextState) => {
    this.state = nextState;
    addForm.setState({
      ...addForm.state,
      isForm: nextState.isAddCard,
    });
    cardList.setState(nextState.cardList);
    console.log(nextState);
  };

  new Header({
    targetEl,
    clickAddCard: () => {
      this.setState({
        ...this.state,
        isAddCard: true,
      });
    },
    clickDelCard: () => {
      this.setState({
        ...this.state,
        cardList: [],
      });
    },
  });

  const addForm = new AddForm({
    targetEl,
    clickCardSave: (card) => {
      this.setState({
        ...this.state,
        cardList: [
          ...this.state.cardList,
          {
            visible: card.visible,
            question: card.question,
            answer: card.answer,
          },
        ],
      });
    },
  });

  const cardList = new CardList({
    targetEl,
    initialstate: this.state.cardList,
  });
}
