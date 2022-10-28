import random
import time


def print_pause(message_to_print, delay=1):
    print(message_to_print)
    time.sleep(delay)


def intro(monster):
    print_pause("You find yourself standing in an open field, "
                "filled with grass and yellow wildflowers.")
    print_pause("Rumor has it that a " + monster + " is "
                "somewhere around here, and has been "
                "terrifying the nearby village.")
    print_pause("In front of you is a house.")
    print_pause("To your right is a dark cave.")
    print_pause("In your hand you hold your trusty "
                "(but not very effective) dagger.")


def choice(monster, weapon, weapons_list):
    print_pause("Enter 1 to knock on the door of the house.\n"
                "Enter 2 to peer into the cave.")
    while True:
        try:
            choice = int(input("What would you like to do?\n"
                               "(Please enter 1 or 2).\n"))
        except ValueError:
            print("Try again.")
            continue
        else:
            if choice == 1:
                house(monster, weapon, weapons_list)
            elif choice == 2:
                cave(monster, weapon, weapons_list)


def cave(monster, weapon, weapons_list):
    print_pause("You peer cautiously into the cave.")
    print_pause("It turns out to be only a very small cave.")
    print_pause("Your eye catches a glint of metal behind a rock.")
    print_pause("You have found something better to "
                "defend yourself: a " + weapon + "!")
    print_pause("You discard your silly old dagger and "
                "take the " + weapon + " with you.")
    print_pause("You walk back out to the field.")
    weapons_list.append(weapon)
    choice(monster, weapon, weapons_list)


def house(monster, weapon, weapons_list):
    while True:
        try:
            choice = int(input("Would you like to fight (1) or run away (2)?\n"))
        except ValueError:
            print("Try again.")
            continue
        else:
            if choice == 1:
                fight(monster, weapon, weapons_list)
            elif choice == 2:
                field(monster, weapon, weapons_list)


def field(monster, weapon, weapons_list):
    print_pause("You run back into the field. "
                "Luckily, you don't seem to have been followed.")
    choice(monster, weapon, weapons_list)


def fight(monster, weapon, weapons_list):
    if weapon in weapons_list:
        print_pause("As the " + monster + " moves to attack, "
                    "you unsheath your new " + weapon + ".")
        print_pause("The " + weapon + " " + "shines brightly in your "
                    "hand as you brace yourself for the attack.")
        print_pause("But the " + monster + " takes one look at your "
                    "shiny new toy and runs away!")
        print_pause("You have rid the town of the " + weapon + ".")
        print_pause("YOU WON.")
        play_again(monster, weapon, weapons_list)
    elif weapon not in weapons_list:
        print_pause("You approach the door of the house.")
        print_pause("You are about to knock when the door opens "
                    "and out steps a " + monster + ".")
        print_pause("Eep! This is the " + monster + "'s house!")
        print_pause("The " + monster + " attacks you!")
        print_pause("You feel a bit under-prepared for this; "
                    "with only having a tiny dagger.")
        print_pause("You do your best...")
        print_pause("but your dagger is no match for the " + monster + ".")
        print_pause("You have been defeated!")
        print_pause("GAME OVER.")
        play_again(monster, weapon, weapons_list)


def play_again(monster, weapon, weapons_list):
    while True:
        try:
            choice = input("Would you like to play again? (y/n)\n")
        except ValueError:
            print("Try again.")
            continue
        else:
            if choice == "y":
                print_pause("Excellent! Restarting the game...\n")
                play_game()
            elif choice == "n":
                print("You are leaving the game...\n")
                exit()


def play_game():
    monster = random.choice(["zombie", "vampire", "goblin",
                             "chimera", "werewolf"])
    weapon = random.choice(["sword", "bow", "hammer", "axe", "magic wand"])
    weapons_list = []
    intro(monster, weapon, weapons_list)
    choice(monster, weapon, weapons_list)


play_game()
