#ifndef COMBO_OOT_EVENTS_H
#define COMBO_OOT_EVENTS_H

#define EV_CHK_DEKU_MIDO_MEET           0x02
#define EV_CHK_DEKU_MIDO_SWORD_SHIELD   0x04
#define EV_CHK_DEKU_TREE_MEET           0x0c
#define EV_CHK_ZELDA_LETTER             0x40
#define EV_CHK_SONG_ZELDA               0x59
#define EV_CHK_SONG_SUN                 0x5a
#define EV_CHK_SARIA_OCARINA            0xc1

#define EV_CHK_STONE_EMERALD            0x19
#define EV_CHK_STONE_RUBY               0x25
#define EV_CHK_STONE_SAPPHIRE           0x37

int  GetEventChk(int index);
void SetEventChk(int index);

#endif
