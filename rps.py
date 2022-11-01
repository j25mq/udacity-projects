import random

moves = ["rock", "paper", "scissors"]


class Player():
    my_move = random.choice(moves)
    their_move = random.choice(moves)

    def move(self):
        pass

    def learn(self, my_move, their_move):
        self.my_move = my_move
        self.their_move = their_move


class CyclePlayer(Player):
    def move(self):
        index = 0
        moves = index
        if self.my_move == "rock":
            index += 1
            return "paper"
        elif self.my_move == "paper":
            index += 1
            return "scissors"
        else:
            index += 1
            return "rock"

    def learn(self, my_move, their_move):
        self.my_move = my_move


class RandomPlayer(Player):
    def move(self):
        return random.choice(moves)

    def learn(self, my_move, their_move):
        pass


class ReflectPlayer(Player):
    def move(self):
        return self.their_move

    def learn(self, my_move, their_move):
        self.their_move = their_move


class RockPlayer(Player):
    def move(self):
        return "rock"

    def learn(self, my_move, their_move):
        pass


class HumanPlayer(Player):
    def move(self):
        move1 = 0
        move1 = input("Rock, paper, scissors? > ").lower()
        if move1 == "rock" or move1 == "paper" or move1 == "scissors":
            return move1
        else:
            print("Try again.")
            return self.move()


class Game:
    score_p1 = 0
    score_p2 = 0

    def __init__(self, p1, p2):
        self.p1 = p1
        self.p2 = p2

    def play_round(self):
        move1 = self.p1.move()
        move2 = self.p2.move()
        print(f"You played {move1}. Opponent played: {move2}.")
        if move1 == move2:
            print("TIE.")
        elif beats(move1, move2):
            print(f"{self.p1} won!")
            self.score_p1 += 1
        else:
            print(f"{self.p2} won!")
            self.score_p2 += 1
        self.p1.learn(move1, move2)
        self.p2.learn(move2, move1)
        print("-----------------------------")
        print("Current scores of this round:")
        print(f"Player 1 (you): {game.score_p1}")
        print(f"Player 2 (Opponent): {game.score_p2}")
        print("-----------------------------")

    def play_game(self):
        print("Game start!")
        print("-----------")
        for round in range(1, 9):
            print(f"Round {round}:")
            self.play_round()
        count_result()
        print("Game over!")


def beats(move1, move2):
    return ((move1 == 'rock' and move2 == 'scissors') or
            (move1 == 'scissors' and move2 == 'paper') or
            (move1 == 'paper' and move2 == 'rock'))


def count_result():
    print("Here are the final scores:")
    print(f"Player 1 (you): {game.score_p1}")
    print(f"Player 2 (Opponent): {game.score_p2}")
    if game.score_p1 > game.score_p2:
        print("You won.")
    elif game.score_p1 < game.score_p2:
        print("Opponent won.")
    else:
        print("Equal scores. TIE.")
    game_over()


def learn(self, my_move, their_move):
    their_move = Rocklayer.move, RandomPlayer.move, HumanPlayer.move


def game_over():
    print("-------------------------------------")
    gameover = input("Would you like to play again? (y/n) > ")
    if gameover == "y":
        game.score_p1 = 0
        game.score_p2 = 0
        print("Starting a new game...")
        game.play_game()
    elif gameover == "n":
        print("Leaving the game...")
    else:
        game_over()


if __name__ == '__main__':
    players = [CyclePlayer(),  RandomPlayer(), ReflectPlayer(), RockPlayer()]
    p1 = HumanPlayer()
    p2 = random.choice(players)
    game = Game(p1, p2)
    game.play_game()
