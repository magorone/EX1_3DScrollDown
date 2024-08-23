# EX1_3DScrollDown

Описание папок с .png под анимацию:

Разположение камеры:
    Front // Back // Left (Side) // Right (mirror Side)

Переходы:
    TransitionFrontToSide // TransitionSideToFront
    TransitionBackToSide // TransitionSideToBack

img/
    Папки                                     | 30FPS   | 60FPS   |
    -------------------------------------------------------------
    RunFromSide                               |  +      |         |     1 - 21 30FPS
    RunLeft (RunSide)                         |  +      |   +     |     4 - 19 потом 1 - 3 30FPS
    RunFront                                  |         |         |     1 - 19 30FPS
    RunBack                                   |  +      |         |     1 - 19 30FPS
    RunRight                                  |         |         |     1 - 19 30FPS
    RunTransitionSideToBack (RunTransition2)  |  +      |         |     1 - 38 30FPS
    RunTransitionBackToSide (RunTransition)   |  +      |         |     1 - 38 30FPS
    RunTransitionSideToFront                  |         |         |     
    RunTransitionFrontToSide                  |         |         |     
    
p.s. нужно ли Front* обсудить

 Илья: поиграть с ракурсами
 (в будущем при зацикленной анимации движения - переключения сборка)

23/08/2024 - необходимо добавить кадровку на переходах (понять как это делать) - сейчас не хватает кадров