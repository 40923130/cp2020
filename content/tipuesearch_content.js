var tipuesearch = {"pages": [{'title': '40923130', 'text': 'cd tmp>cd cp2020>python wsgi.py \n cd tmp>cd cp2020>git pull版本確認 \n cd tmp>cd cp2020>git push上傳到倉儲 \n 此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n https://github.com/mdecourse/cmsimde 的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443 就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': '40923130.html'}, {'title': 'HW1', 'text': '', 'tags': '', 'url': 'HW1.html'}, {'title': 'P.37', 'text': 'Describe common computer case designs and features. \n Describe common motherboard form factors and suitable cases for each. \n Identify power supply connectors. \n Recommend and install an appropriate power supply given specific hardware to be powered. \n Disassemble and reassemble computers in the most common case designs. \n Test power supplies to ascertain proper functioning. \n \n 描述一般的電腦機殼和特徵 \n 描述一般的底板成形因素和合適的機殼 \n 自定電源供應器 \n 建議並且安裝一個合適的電源供應給明確的硬體做功 \n 在最常見的機殼設計裡拆開和重組電腦 \n 測試電源供應去確定正確的功能 \n', 'tags': '', 'url': 'P.37.html'}, {'title': 'P.38', 'text': 'In this lesson, we are going to cover the various cases available for computers, several form factors or layouts of the motherboards, and the different types of power supplies that we use to provide direct current (DC) to the computer’s components. \n From the outside, almost all computers looked the same for a long time, but contemporary systems have really changed the size and shape of the cases available. The most common cases are mid-size or mini-towers, while some people, mostly gamers, still like full-sized towers. Some cases are made in a small form factor (SFF) to be easily carried for portability or to match an entertainment system like a DVD player in size. Servers are often contained in very long and narrow cases that usually range in size from one unit tall (a few inches) to two units tall (about 6-8 inches). Each of these cases provide us with a distinct layout of the motherboard they will accept. This layout is called a form factor. Larger case sizes allow for additional devices (such as hard disk drives and optical drives). The type of case will depend on the customer’s needs. \n Tower case. Photo used under CC-BY-NC license from \xa0 Edmund Tse . \n The size and arrangement of the motherboard is described as the form factor. The ATX form factor is one of the most widely used form factors in contemporary computers. It has been in use since the 1990s. The ATX form factor contains a rear port cluster for its integrated ports (audio, video, sound, network, etc.). The expansion slots run parallel to the short side of the board, and the cases have a left-side case opening to support easily adding expansion cards. \n ATX form factor motherboard. Photo used under CC-BY-ND license from \xa0 Lilly Lau . \n The mini-ATX form factor is smaller in size than the ATX form factor, but still contains many of the ATX features, such as a rear port cluster for its integrated ports (audio, video, sound, network, etc.). The expansion slots run parallel to the short side of the board, and the cases have a left-side case opening to support easily adding expansion cards. \n As shown in the table below, there are many variations of the ATX form factor, with the main difference being the physical size of the board and the number of expansion slots. Bigger boards allow for additional expansion slots, but require a larger tower. \n The ITX form factor was created in 2001. The ITX form factor itself was not very popular, but a variant called the mini-ITX became quite popular, since it also fit into ATX-style cases. It also contains a rear port cluster for its integrated ports (audio, video, sound, network, etc.). The expansion slots run parallel to the short side of the board, and the cases have a left-side case opening to support easily adding expansion cards, just like the ATX boards. Smaller variations, called pico-ITX and nano-ITX, are often used in computing appliances such as smart televisions, Internet-connected set-top devices designed to integrate with TV sets, and others. \n Small form factor motherboard. Photo used under CC-BY license from \xa0 Karl-Martin Skontorp . \n ________________________________________________________________________________ \n \n 在本章中 ，我們將對電腦替換各式各樣有效的的機殼，許多的成形因素或底板的設計，而且我們使用不同種類的電源供應品提供直流電給電腦的零件。 \n 從外觀來看，大部分所有的電腦在過去長時間裡看起來都一樣，但現代的電腦真的改變機殼合適的尺寸和形狀，最常見的機殼是中型和小型尺寸，然而有些人和大部分的遊戲玩家都喜歡大型尺寸的機殼。有些做成超小型機殼是為了移動更容易攜帶或著配對像DVD播放器大小的娛樂系統。服務器時常包含在一個長且狹窄的機殼裡大部分的尺寸從一個單位高(幾英吋)到兩個單位高(大約6~8英吋)。他們接受這裡每個機殼提供我們不同的底板設計。這個設計稱為組成因素。最大的機殼尺寸允許給額外的設備(像硬體磁碟驅動和光學的驅動)。不同的機殼依賴顧客的需求。 \n \xa0 \n 主機板和處理器 \n 組成元素 \n 母板的尺寸和排列方式描述為外形尺寸。 ATX規格是現代計算機中使用最廣泛的規格之一。 自1990年代以來一直在使用。 ATX外形尺寸包含一個用於集成端口（音頻，視頻，聲音，網絡等）的後端口群集。 擴展插槽平行於電路板的短邊，並且機箱的左側殼體開口可輕鬆添加擴展卡。 \n \n 微型ATX尺寸比ATX尺寸小，但仍包含許多ATX功能，例如用於集成端口（音頻，視頻，聲音，網絡等）的後部端口集群。 擴展插槽平行於電路板的短邊，並且機箱的左側殼體開口可輕鬆添加擴展卡。 \n 如下表所示，ATX尺寸因數而異，主要區別在於主板的物理尺寸和擴展插槽的數量。 更大的板可提供額外的擴展插槽，但需要更大的塔架。 \n \xa0 \n ITX尺寸規格創建於2001年。ITX尺寸規格本身並不十分流行，但是一個名為mini-ITX的變體就變得非常流行，因為它也適用於ATX風格的機殼。 它還為集成端口（音頻，視頻，聲音，網絡等）包含一個後部端口集群。 擴展插槽平行於板子的短邊延伸，並且外殼具有左側的外殼開口，以支持輕鬆添加擴展卡，就像ATX板一樣。 較小的變體，稱為pico-ITX和nano-ITX，通常用於計算設備中，例如智能電視，旨在與電視機集成的互聯網連接的機頂盒設備等。 \n', 'tags': '', 'url': 'P.38.html'}, {'title': 'P.39', 'text': 'Power supply units (PSUs) are required in all computer systems, since computers are designed to run on direct current (DC), but our home and office outlets only provide alternating current (AC). For a computer to run well, it requires good, clean power from the outlet to the computer’s PSU. The PSU then converts the AC input into DC output to the various subsystems of the computer at the necessary voltages. The PSU creates heat in this transformation from AC to DC. Therefore, a good power supply fan is essential to remove the heat from the PSU and computer system. A power supply is a field replaceable unit (FRU) and should be replaced — never repaired — because the capacitors will hold voltage well after the PSU has been unplugged. \n Computer PSU, showing a space for the fan and an electric cord input. Photo used under CC-BY-NC license from \xa0 Jeff Coleman . \n Power supplies are rated in watts, with contemporary computer systems requiring 400 watts of power or more. Every device inside the computer requires power and receives it from the PSU. Therefore, the more devices there are inside the computer, the more power that is required from the power supply. A technician should verify that the backward “UR” logo \xa0 \xa0 appears on the power supply, since this indicates that the power supply has been properly safety tested. When purchasing a new computer, the power supply will already have been selected based on the initial configuration of the machine, but if you are adding new components to the workstation, you will need to verify that the power supply has enough wattage to support the existing and new components. To do this, you need to determine the wattage by adding all the devices’ wattage together. If the device is measured in amps, multiply amps times voltage (A x V) to calculate the watts. Power supplies are not 100 percent efficient, nor are they rated to be 100 percent efficient. Therefore, you should always keep the total wattage under 70 percent of the rated wattage of the power supply to ensure proper computer operations. \n Power supply specifications. Photo used under CC-BY-NC-ND license from \xa0 Daniel Lu . \n Dual Voltage \n Most of today’s computers are built around the world with different voltages. In the United States, power is delivered at 115–120 VAC (voltage alternating current) at 60 hertz. In Europe and Asia, the typical wall outlet provides 230–240 VAC at 50 hertz. If the power supply supports dual voltage, you need to ensure the correct setting is selected. In that situation, there should be a slider button that allows you to select the proper voltage. Slide the button to the appropriate voltage before plugging the power supply into the wall or damage to the computer can occur. \n What do you think would happen if we selected the wrong voltage before plugging it in? Well, if we are in Europe and expecting 230 VAC from the wall, but set the switch to 110 VAC (the United States standard), the power supply would receive an overvoltage condition, damaging the power supply and possibly starting a fire. If instead we took a European PC, which expects 230 VAC, and plugged it into a United States electrical outlet providing 110 VAC, we would get an undervoltage condition, and the computer would not start up. \n Power supply port and on/off switch within a metal honeycomb mesh to allow for power supply ventilation. Photo used under CC-BY-SA license from \xa0 Kevin Byrom. \n _______________ \n 所有計算機系統都需要電源單元（PSU），因為計算機被設計為以直流電（DC）運行，但是我們的家庭和辦公室插座僅提供交流電（AC）。 為了使計算機正常運行，需要從插座到計算機PSU的電源乾淨整潔。 然後，PSU將交流輸入轉換為直流輸出，並在必要的電壓下將其輸入計算機的各個子系統。 PSU在從AC轉換為DC的過程中會產生熱量。 因此，良好的電源風扇對於消除PSU和計算機系統的熱量至關重要。 電源是一個現場可更換單元（FRU），應進行更換（切勿修理），因為在拔下PSU後電容器將保持良好的電壓。 \n 電源的額定功率為瓦特，當代計算機系統需要400瓦特或更高的功率。計算機內部的每個設備都需要電源，並從PSU接收電源。因此，計算機中存在的設備越多，電源所需要的功率就越大。技術人員應驗證電源上是否有向後的“ UR”徽標，因為這表明電源已通過適當的安全測試。購買新計算機時，將已經根據計算機的初始配置選擇了電源，但是如果您要向工作站添加新組件，則需要驗證電源是否具有足夠的功率以支持現有電源。和新組件。為此，您需要通過將所有設備的瓦數相加來確定瓦數。如果設備以安培為單位測量，則將安培乘以電壓（A x V）以計算瓦數。電源效率不是100％，也不是額定為100％。因此，應始終將總功率保持在電源額定功率的70％以下，以確保計算機正常運行。 \n 雙電壓 當今大多數計算機都是在世界各地以不同的電壓構建的。在美國，功率在60赫茲的115-120 VAC（交流電壓）下輸送。在歐洲和亞洲，典型的壁裝電源插座以50赫茲提供230-240 VAC。如果電源支持雙電壓，則需要確保選擇正確的設置。在這種情況下，應該有一個滑塊按鈕，可讓您選擇合適的電壓。在將電源插頭插入牆上之前，請將按鈕滑動至適當的電壓，否則可能會損壞計算機。 \n 如果我們在插入之前選擇了錯誤的電壓，您會怎麼辦？好吧，如果我們在歐洲並期望牆壁有230 VAC的電壓，但將開關設置為110 VAC（美國標準），則電源將出現過壓狀況，從而損壞電源並可能引發火災。如果取而代之的是，我們帶了一個歐洲PC，該PC期望提供230 VAC的電源，然後將其插入提供110 VAC的美國電源插座，則將出現欠壓情況，並且計算機將無法啟動。 \n', 'tags': '', 'url': 'P.39.html'}, {'title': 'P.40', 'text': 'ATX 12V 2.x power supplies connect to the motherboard by way of a 24-pin cable + 4-pin/8-pin for CPU and 6- or 8-pin for PCIe video. \n The purpose of a "dual-rail" PSU is to separate and limit the current through each wire to avoid overheating. \n Originally, the ATX 1.x standard required 20 pins to provide the mainboard (motherboard) power connection. ATX version 2.x expanded this to 24 pins for a standard ATX12V power supply. Many power supplies will provide a 20+4 pin cable, so that they are backward compatible with older systems. \n With the higher voltage requirements of the Pentium 4 and onward, the ATX version 2.x standard made this a 24-pin cable +4 pin (original mini-ATX or P4 connector) or an EPS12 8-pin connector. The ATX12V provides a four-wire square connector for additional motherboard power. ESP12V provides an eight-wire connector (often split into two four-wire connectors for backward compatibility) for additional CPU power. Finally, there is the AUX connector, a six-wire connector to provide older systems with extra power to the motherboard. \n ATX12V version 2.x eliminated the 3.3V and 5.5V rails in favor of 12V rails due to the nature of CPU and PCIe power requirements. The ATX standards from version 2.x on have all developed to improve power delivery. The 12V \xa0 dual-rail \xa0 PSU is designed to limit over voltage situations and protect against overheating. \n \n \n \n Power Cable \n Application \n Pinouts/Voltage \n \n \n \n \n \n \n \n IDE/EIDE PATA devices (HDD/ODD); Case Fans; PCI/PCIe Expansion cards requiring external power (i.e., USB, Firewire, Thunderbolt) \n Red (+5V), Yellow (+12V), Black (G), Black (G) \n \n \n \n \n \n SATA Devices (HDD/ODD); PCI/PCIe Expansion cards requiring external power (i.e., USB, Firewire, Thunderbolt) \n 15-pin (+3.3 V, +5V, +12V) \n \n \n \n \n \n PCI Express Video Cards – 6 or 8 pins \n \n 6-pin (+12 v) (ATX12V Vers. 2.1) \n 8-pin (+12 v) (ATX12V Vers. 2.2) \n or later \n \n \n \n \n \n Power supply wires. Photo used under CC-BY-NC license from \xa0 Jeff Coleman . \n \n In addition to the motherboard needing power to function, peripherals need power to function, too. The power supply provides additional connectors for peripherals used throughout the computer system. The oldest style connector is the Molex connector and is used for PATA hard drives, PATA CD/DVD drives, and extra cooling fans. The Molex is a four-pin connector that is usually one of the largest connectors. A mini-Molex or Berg connector is a four-pin connector that is rather small and only used for floppy disk drives, specifically the 3.5-inch variant of drive. SATA devices use SATA power cables, which are 15-pin L-shaped connectors. PCIe power connectors (peripheral component interconnect express) are six-pin or eight-pin connectors that are used to provide additional power to PCIe video cards at 12 VDC. Finally, if you run out of connectors of a certain type, there are conversion cables to make a Molex into SATA, or Molex into PCIe. Additionally, there exist Y-connectors for Molex that allow a single Molex to be split into two Molex connectors. As you remember, power supplies convert AC to DC power to provide power to the devices. These connectors have either +/-3.3 VDC, +/- 5 VDC, or +/- 12 VDC. \n ________ \n \n ATX 12V 2.x電源通過24針電纜+ 4針/ 8針（用於CPU）和6或8針（用於PCIe視頻）連接到主板。 \n “雙軌” PSU的目的是分離並限制通過每條電線的電流，以避免過熱。 \n 最初，ATX 1.x標準需要20個引腳才能提供主板（主板）電源連接。 ATX版本2.x將其擴展為24引腳，用於標準ATX12V電源。許多電源將提供20 + 4針電纜，以便它們與較早的系統向後兼容。 \n 隨著奔騰4及更高版本對電壓的更高要求，ATX 2.x版標準將其設置為24針電纜+4針（原始的mini-ATX或P4連接器）或EPS12 8針連接器。 ATX12V提供一個四線方形連接器，用於增加主板電源。 ESP12V提供了一個八線連接器（為了便於向後兼容，通常分為兩個四線連接器），以提供更多的CPU電源。最後，還有AUX連接器，這是六線連接器，用於為較舊的系統提供額外的電源給主板。 \n 由於CPU和PCIe電源要求的特性，ATX12V 2.x版取消了3.3V和5.5V供電軌，轉而採用12V供電軌。從2.x版開始的ATX標準都已經開發出來，以改善功率輸出。 12V雙軌PSU旨在限製過壓情況並防止過熱。 \n 除了主板需要電源才能工作之外，外圍設備也需要電源才能工作。電源為整個計算機系統中使用的外圍設備提供了附加的連接器。最古老的連接器是Molex連接器，用於PATA硬盤驅動器，PATA CD / DVD驅動器和額外的冷卻風扇。 Molex是四針連接器，通常是最大的連接器之一。微型Molex或Berg連接器是一個四針連接器，它很小，僅用於軟盤驅動器，尤其是3.5英寸驅動器。 SATA設備使用SATA電源線，該電源線是15針L形連接器。 PCIe電源連接器（外圍組件互連Express）是六針或八針連接器，用於為12 VDC的PCIe視頻卡提供額外的電源。最後，如果您用完了某種類型的連接器，也可以使用轉換電纜將Molex轉換為SATA，或將Molex轉換為PCIe。此外，還存在用於Molex的Y型連接器，該連接器可將單個Molex分為兩個Molex連接器。您還記得，電源將交流電轉換為直流電，以便為設備供電。這些連接器具有+/- 3.3 VDC，+ /-5 VDC或+/- 12 VDC。 \n \n \n \n', 'tags': '', 'url': 'P.40.html'}, {'title': 'P.41', 'text': 'To remove the power supply, first you must power down the computer. Next, you want to verify the power switch is in the off position, and disconnect the power cord from the wall and from the machine. You can then open the case by removing the screens, and then disconnect all power supply cables from all the devices in the computer. Next, you will remove all the screws holding the PSU in place and lift or slide out the power supply from the workstation. \n To see more on computer disassembly and reassembly, \xa0 view this slide deck . \n \n Power supply unit. Photo used under CC-BY-NC-ND license from \xa0 Jordan Dawe . \n Replace A Power Supply \n \n \n To replace a PSU, you would need to verify the proper wattage for the new power supply and slide the power supply into the case. You then need to screw the power supply into place and connect all the power supply cables to the various internal components. Next, you should check the voltage setting and make sure it is set to 110 VAC for North America or 230 VAC for European/Asian countries. Connect your power cord to the power supply and turn on the computer. If the computer works properly, you can then close the case and secure the enclosure with screws.\n In the lab exercise below, you should remove and replace the PC power supply. Be sure to start with the right tools and always use safety precautions, especially when handling the power supply. For the purposes of this lab exercise, you can assume that ESD precautions are in place. \n \n \n \n lab exercise \n \n Test a Power Supply \n \n In order to test a PSU, you can use either a multimeter or a power supply tester. While a multimeter would work, you must be able to know the exact pinout for each type of connector and the amount of voltage to expect from each pin. Instead, it is much simpler to buy one of many different computer power supply testers on the market today. Small LEDs light up to let you know if the power feeds are working correctly. The motherboard power tester also beeps to let you know it is receiving the correct amount of power. This device is a must for anyone who wants to be able to test power supplies quickly and easily. To use it, simply hook up the motherboard power connector (20+4 connector) to the right side of the tester. Next, hook up the power connector for the device (SATA, Molex, Berg, etc.) to the left hand side of the tester. The lights will show up green if you are receiving the proper voltages (3, 5, 12 VDC). \n \n \n \n \n \n \n \n \n Power supply tester. Photo used under Creative Commons license from \xa0 Kevin Byrom . \n \n In the lab below, you should test the power supply using the power supply tester and multimeter. Be sure to use proper safety precautions. For the purposes of this lab exercise, you can assume that ESD precautions are in place. \n \n \n \n _______________ \n 要卸下電源，首先必須關閉計算機電源。 接下來，您要確認電源開關處於關閉位置，並從牆壁和機器上拔下電源線。 然後，您可以通過卸下屏幕來打開機箱，然後從計算機中的所有設備上斷開所有電源電纜的連接。 接下來，您將卸下所有將PSU固定到位的螺釘，並從工作站上提起或滑出電源。 \n \n \n 更換電源 要更換PSU，您需要驗證新電源的合適功率，並將電源滑入機箱。然後，您需要將電源固定到位，並將所有電源電纜連接到各種內部組件。接下來，您應該檢查電壓設置，並確保將其設置為北美的110 VAC或歐洲/亞洲國家的230 VAC。將電源線連接到電源，然後打開計算機。如果計算機正常運行，則可以合上機箱並用螺釘固定機箱。 在下面的實驗室練習中，您應該卸下並更換PC電源。請務必從正確的工具開始，並始終使用安全預防措施，尤其是在處理電源時。在本實驗中，您可以假定已經採取了ESD預防措施。 實驗練習 測試電源 為了測試PSU，可以使用萬用表或電源測試儀。儘管萬用表可以工作，但您必須能夠知道每種連接器的確切引腳排列以及每個引腳的預期電壓量。相反，購買當今市場上許多不同的計算機電源測試儀之一要簡單得多。小型LED會亮起，以告知電源是否正常工作。主板電源測試儀還會發出嗶嗶聲，以通知您它正在接收正確數量的電源。對於希望能夠快速輕鬆地測試電源的任何人來說，此設備都是必需的。要使用它，只需將主板電源連接器（20 + 4連接器）連接到測試儀的右側即可。接下來，將設備（SATA，Molex，Berg等）的電源連接器連接到測試儀的左側。如果您接受適當的電壓（3、5、12 VDC），則指示燈將顯示為綠色。 \n \n 在下面的實驗室中，應該使用電源測試儀和萬用表測試電源。 確保使用適當的安全預防措施。 在本實驗中，您可以假定已經採取了ESD預防措施。 \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'P.41.html'}, {'title': 'P.42', 'text': 'Identify motherboard components and describe their basic functions. \n Place an array of microprocessors in approximate date or performance order. \n Compare current microprocessor speeds and capabilities with those of 10 and 20 years ago, and describe the effect of processing capabilities. \n 識別主板組件並描述其基本功能 \n 將微處理器陣列按大約日期或性能順序放置 \n 將當前的微處理器速度和功能與10年前和20年前的速度和功能進行比較，並描述處理能力的影響 \n', 'tags': '', 'url': 'P.42.html'}, {'title': 'P.49', 'text': 'Remove and Install RAM. \n Configure and apply BIOS settings. \n 卸下並安裝RAM \n 配置並應用BIOS設置', 'tags': '', 'url': 'P.49.html'}, {'title': 'P.52', 'text': 'Different types of RAM have been in common use during different time periods. It is important to understand them all, because many companies use a mix of legacy systems and more current ones. DRAM, or dynamic RAM, is one of the oldest types. It requires frequent refreshing of contents. DRAM stores each bit of data or program code in a storage cell consisting of a capacitor and a transistor, and is typically organized in a rectangular configuration of storage cells. A DRAM storage cell is dynamic in that it needs to be refreshed or given a new electronic charge every few milliseconds to compensate for charge leaks from the capacitor. \n SRAM, or static RAM, solved the issue of the need for constant refreshing, but it is quite expensive to manufacture. Therefore, SRAM is only used for very high-speed needs, such as level 1, level 2, and level 3 CPU caches, hard drive buffers, and LCD screen buffers. \n SDRAM, or synchronous DRAM, was the first memory that operated at the same speed as the motherboard’s bus. The initial chips were 168-pin dual in-line memory modules, which have their speed rated in MHz. Common naming conventions include PC-66 (which is equivalent to 66 Mhz), or PC-133, or PC-266. \n While SDRAM performs at the same speed as the motherboard’s bus, the CPU operates many times faster than the motherboard’s bus. DDR SDRAM stands for double data rate synchronous dynamic random access memory. This type of memory can transfer data two times per clock cycle, thereby doubling the speed over traditional SDRAM. These chips come in 184-pin varieties, rated in MBps (throughput). A good example of this is something like PC-1600, which is 1600 MBps throughput. \n DDR2 SDRAM is double double data rate SDRAM, which has a higher \xa0 latency \xa0 but faster access to the external bus. These chips have 240 pins to connect their modules to the slot, and are also rated in MBps, such as PC2-4200, which is 4200 MBps (or 4.2 GBps). \n DDR3 SDRAM is known as double data rate 3 SDRAM, and is the latest generation of SDRAM in use today. It runs at a lower voltage and is faster than DDR2, but again the latency is increased over the previous DDR2 modules. These modules also have 240 pins, but they are “keyed” differently than DDR2. The “keyed” portion is where the gap in the pins is located, so only a DDR2 will fit in a DDR2 slot, and a DDR3 will fit only in a DDR3 slot. The common notation for these is PC3-10600, where the 10600 is the speed in MBps. \n Rambus direct ram (RDRAM) is also known as RIMM (Rambus in-line memory module). These modules come in a 184-pin variant (16-bit version) and a 232-pin variant (32-bit version). Each empty slot in the motherboard has to have a continuity module (CRIMM) placed inside it, or the motherboard won’t recognize the memory properly. This is not used in recent systems, but was used heavily in Pentium 4 systems. The RDRAM is measured in MBps, such as RIMM 4200 (or 4200 MBps). \n Random Access Memory. Public domain image from \xa0 Wikipedia . \n \n \n There are other variants of memory that have been used over the years, but they are not common today. The single inline memory module, or SIMM, has either 30 or 72 connectors on both sides of the chip. The single inline pin package, or SIPP, has only 30 pins, and they are physical pins instead of connectors. \n Dual inline memory module, or DIMM, is what is used for DDR, DDR2, and DDR3 chips, with each side of the module having different pinouts in the connectors. The SODIMM, small outline DIMM, is a compact version of memory used in laptops, notebooks, and printers. It can come in DDR SODIMM, DDR2 SODIMM, or DDR3 SODIMM. SODIMM is very common and still heavily used today. \n Finally, there is a laptop version of Rambus memory called small outline Rambus module, but it is rarely used in contemporary systems. \n Small Outline Dual Inline Memory Module (SODIMM). Photo used under CC-BY license from \xa0 William Warby . \n \n \n _______________________________ \n \n 在不同時間段內，通常使用不同類型的RAM。了解所有這些信息非常重要，因為許多公司使用的都是舊系統和最新系統。 DRAM或動態RAM是最古老的類型之一。它需要經常刷新內容。 DRAM將數據或程序代碼的每一位存儲在由電容器和晶體管組成的存儲單元中，並且通常以矩形配置的存儲單元來組織。 DRAM存儲單元是動態的，因為它需要每幾毫秒刷新一次或給其提供新的電荷，以補償電容器的電荷洩漏。 SRAM或靜態RAM解決了不斷刷新的問題，但製造成本很高。因此，SRAM僅用於非常高速的需求，例如1級，2級和3級CPU高速緩存，硬盤驅動器緩衝區和LCD屏幕緩衝區。 SDRAM或同步DRAM是第一個以與主板總線相同的速度運行的內存。最初的芯片是168針雙列直插式內存模塊，其速度額定為MHz。常見的命名約定包括PC-66（相當於66 Mhz），PC-133或PC-266。 儘管SDRAM的性能與主板總線相同，但CPU的運行速度比主板總線快許多倍。 DDR SDRAM代表雙倍數據速率同步動態隨機存取存儲器。這種類型的存儲器可以在每個時鐘週期兩次傳輸數據，從而使速度比傳統SDRAM快一倍。這些芯片有184引腳的型號，額定為MBps（吞吐量）。一個很好的例子就是PC-1600，吞吐量為1600 MBps。 DDR2 SDRAM是雙倍數據速率SDRAM，具有更高的延遲，但對外部總線的訪問速度更快。這些芯片具有240個引腳以將其模塊連接到插槽，並且還以MBps額定，例如PC2-4200，即4200 MBps（或4.2 GBps）。 DDR3 SDRAM被稱為雙倍數據速率3 SDRAM，是當今使用的最新一代SDRAM。它在較低的電壓下運行，並且比DDR2更快，但是與之前的DDR2模塊相比，延遲又增加了。這些模塊還具有240針，但是它們的“鍵控”與DDR2不同。 “鍵控”部分是引腳之間的間隙所在的位置，因此只有DDR2可以插入DDR2插槽，而DDR3只能插入DDR3插槽。這些的常用符號是PC3-10600，其中10600是MBps的速度。 Rambus直接RAM（RDRAM）也被稱為RIMM（Rambus嵌入式存儲模塊）。這些模塊具有184針變體（16位版本）和232針變體（32位版本）。主板上的每個空插槽都必須在其中放置一個連續性模塊（CRIMM），否則主板將無法正確識別內存。在最近的系統中未使用此功能，但在Pentium 4系統中大量使用了此功能。 RDRAM以MBps為單位進行測量，例如RIMM 4200（或4200 MBps）。 \n \n 多年以來，內存還使用了其他變體，但如今並不常見。 單列直插式內存模塊或SIMM在芯片的兩側都有30或72個連接器。 單列直插式引腳封裝或SIPP只有30個引腳，它們是物理引腳而不是連接器。 DDR，DDR2和DDR3芯片使用雙列直插式內存模塊或DIMM，模塊的每一側在連接器中具有不同的引腳排列。 SODIMM是小型DIMM，是便攜式計算機，筆記本計算機和打印機中使用的緊湊型內存。 它可以採用DDR SODIMM，DDR2 SODIMM或DDR3 SODIMM。 SODIMM非常普遍，今天仍然大量使用。 最後，有一種筆記本電腦版本的Rambus內存，稱為小型Rambus模塊，但在現代系統中很少使用。 \n \n \n \n \n \n', 'tags': '', 'url': 'P.52.html'}, {'title': 'P.57', 'text': "To change the settings in the CMOS, the user needs to enter the BIOS. To do this, the user must press a valid key or key combination during the boot process as set by the computer manufacturer. The most common keys used to enter the BIOS are F2 and/or Delete. Typically, the keystroke required to enter the BIOS is displayed on the monitor during the boot process. If the keystroke isn’t displayed, a quick search of the manufacturer’s website will often tell the user the required keystroke to enter the BIOS. \n A boot screen, which displays the required keystroke to enter the BIOS. Photo used under CC-BY-SA license from \xa0 Chip Poutine . \n The BIOS interface and the keystrokes to enter the BIOS change depending on the BIOS manufacturer. Below are images of the BIOS interface from two different manufacturers. Notice that while the information available is consistent between the two, the interface is slightly different. \n Phoenix Award BIOS \n Dell BIOS \n \n Unified Extensible Firmware Interface (UEFI) \n \n \n \n \n \n \n Traditionally, there was only a single type of BIOS, which relied fully on text-based menus and the keyboard for input. More recently, most BIOS manufacturers have switched to the unified extensible firmware interface, or \xa0 UEFI . This updated BIOS allows for both keyboard and mouse input, and provides a \xa0 GUI \xa0 instead of the standard text-based menus; support for GUID partition tables ( GPT ) allowing access to disks up to 2 TB and backward compatibility to legacy partition structures (such as the master boot record ( MBR ) and Linux's GRand Unified Bootloader ( GRUB ); boot from removable media; a user interface allowing for online connectivity for web access, diagnostics, and file management; and \xa0 Secure Boot \xa0 which protects pre-operating system code from modification. Some of these UEFI BIOS also include software that allows the user to surf the Internet, play basic games, and use backup programs without ever entering the normal operating system. \n \n \n EFI's position on the software stack. Licensed under Public Domain via \xa0 Wiki Commons . \n \n \n \n \n \n Automatic Configuring of BIOS/CMOS\xa0 \xa0 \n \n Automatic configuration is a feature of some BIOS. While automatic BIOS configuration does not always create the most optimal settings, it can be quite useful if major errors are occurring to create a safe rollback to a known good state. Automatic configuration options include the BIOS defaults (original/failsafe settings) and setup defaults (optimal settings). There is often a turbo setup, which works toward a quick configuration for a faster system. Automatic configuration of the BIOS is often useful while troubleshooting a system. \n \n Configuration of BIOS settings. Photo used under CC-BY license from \xa0 Linux Screenshots . \n \n ___________________________ \n \n 要更改CMOS中的設置，用戶需要進入BIOS。 為此，用戶必須在計算機製造商設置的引導過程中按下有效的鍵或組合鍵。 用於進入BIOS的最常用鍵是F2和/或Delete。 通常，在引導過程中，進入BIOS所需的擊鍵將顯示在監視器上。 如果未顯示擊鍵，則快速搜索製造商的網站通常會告訴用戶輸入BIOS所需的擊鍵。 \n \n BIOS界面和用於進入BIOS的擊鍵取決於BIOS製造商。 下面是來自兩個不同製造商的BIOS接口的圖像。 請注意，儘管兩者之間的可用信息是一致的，但界面略有不同。 \n \n 傳統上，只有一種類型的BIOS，它完全依賴於基於文本的菜單和用於輸入的鍵盤。 最近，大多數BIOS製造商已切換到統一的可擴展固件接口或UEFI。 此更新的BIOS允許鍵盤和鼠標輸入，並提供GUI而不是標準的基於文本的菜單。 支持GUID分區表（GPT），允許訪問最大2 TB的磁盤，並向後兼容舊分區結構（例如主啟動記錄（MBR）和Linux的GRand Unified Bootloader（GRUB）；從可移動媒體啟動；用戶界面） 允許在線連接以進行Web訪問，診斷和文件管理；以及安全啟動（Secure Boot），可防止操作系統前代碼被修改；其中某些UEFI BIOS還包括允許用戶上網，玩基本遊戲和使用的軟件。 無需進入正常操作系統即可備份程序。 \n \n 自動配置BIOS / CMOS 自動配置是某些BIOS的功能。 儘管自動BIOS配置並不總是會創建最佳設置，但是如果發生重大錯誤以將安全回滾創建到已知的良好狀態，它可能會非常有用。 自動配置選項包括BIOS默認設置（原始/故障安全設置）和設置默認設置（最佳設置）。 通常有一個turbo設置，可用於快速配置以實現更快的系統。 在對系統進行故障排除時，BIOS的自動配置通常很有用。 \n \n \n \n \n \n \n", 'tags': '', 'url': 'P.57.html'}, {'title': 'P.58', 'text': '\n When power is turned on, the POST (power-on self-test) is the diagnostic testing sequence that a computer\'s basic input/output system (or "starting program") runs to determine if the computer keyboard, random access memory, disk drives, and other hardware are working correctly. The POST is the initial test performed by the BIOS upon booting. The role of the POST is to find errors in hardware, and report those errors. The POST checks the following: \n \n CPU and parts of BIOS \n System time \n Video display card \n Memory \n Keyboard \n Disk drives \n \n If the necessary hardware is detected and found to be operating properly, the computer begins to boot. If the hardware is not detected or is found not to be operating properly, the BIOS issues an error message. This error message may be text on the display screen and/or a series of coded beeps, depending on the nature of the problem. Since the POST runs before the computer\'s video card is activated, it may not be possible to progress to the display screen. The pattern of beeps may be a variable number of short beeps or a mixture of long and short beeps, depending on what type of BIOS is installed. The pattern of beeps contains messages about the nature of the problem detected. For example, if the keyboard is not detected, a particular pattern of beeps will inform you of that fact. An error found in the POST is usually fatal (that is, it causes the current program to stop running) and will halt the boot process, since the hardware checked is absolutely essential for the computer\'s functions. \n The pattern of beeps is like Morse code. The number and sequence of beeps has a meaning set by the computer manufacturer. Therefore, the meaning of each beep differs by manufacturer. A chart that includes some AMI and Dell beep codes is shown below. \n BEEP CODE COMPARISON CHART \n \n \n \n BEEP CODE \n AMI \n DELL \n \n \n \n \n 1 \n DRAM refresh failure \n BIOS ROM corruption or failure \n \n \n 2 \n Parity circuit failure \n RAM not detected \n \n \n 3 \n Base 64K RAM failure \n Motherboard failure \n \n \n 4 \n System timer failure \n RAM failure \n \n \n 5 \n Process failure \n CMOS battery failure \n \n \n \n \n _______________________________________ \n \n 開機時，POST（開機自檢）是計算機基本輸入/輸出系統（或“啟動程序”）運行以確定計算機鍵盤，隨機存取存儲器，磁盤驅動器的診斷測試順序。 ，並且其他硬件運行正常。 POST是BIOS在引導時執行的初始測試。 POST的作用是查找硬件錯誤，並報告這些錯誤。 POST檢查以下內容： \n CPU和部分BIOS 系統時間 視頻顯示卡 記憶 鍵盤 磁盤驅動器 如果檢測到必要的硬件並發現其運行正常，則計算機將開始啟動。如果未檢測到硬件或發現硬件運行不正常，BIOS將發出錯誤消息。根據問題的性質，此錯誤消息可能是顯示屏上的文本和/或一系列編碼的嗶聲。由於POST在激活計算機的視頻卡之前運行，因此可能無法進入顯示屏幕。嗶聲的模式可以是可變數目的短嗶聲，也可以是長短嗶聲的混合，具體取決於安裝的BIOS類型。嗶聲的模式包含有關所檢測問題性質的消息。例如，如果未檢測到鍵盤，則特定的嗶嗶聲將告知您該事實。在POST中發現的錯誤通常是致命的（也就是說，它導致當前程序停止運行），並且將終止引導過程，因為檢查的硬件對於計算機的功能絕對必要。 \n 嗶聲的模式類似於摩爾斯電碼。嗶聲的數量和順序由計算機製造商設定。因此，每個嗶嗶聲的含義因製造商而異。包含一些AMI和Dell嗶聲代碼的圖表如下所示。 \n 嗶聲代碼比較表 \n \n \n \n BEEP CODE \n AMI \n DELL \n \n \n \n \n 1 \n DRAM刷新失敗 \n BIOS ROM損壞或故障 \n \n \n 2 \n 奇偶校驗電路故障 \n 未檢測到RAM \n \n \n 3 \n 基本64K RAM故障 \n 主板故障 \n \n \n 4 \n 系統計時器故障 \n RAM 故障 \n \n \n 5 \n 處理失敗 \n CMOS電池故障 \n \n \n', 'tags': '', 'url': 'P.58.html'}, {'title': 'P.59', 'text': '\n So how is the BIOS updated? Recall that BIOS is firmware, or software on a chip. BIOS needs updating when there are power management issues or a processor is upgraded. Always check the manufacturer’s website for the latest firmware version. In the old systems (1980s-1990s), the actual BIOS chip had to be replaced entirely. In newer systems, the BIOS is “flashed.” Flashing is a special process in which the BIOS is overwritten, and shouldn’t be done unless absolutely necessary. Always be sure to back up information before doing a BIOS flash; if a flash doesn’t occur successfully, the system can be irrevocably broken to the point that it will no longer boot. \n Updating of BIOS settings. Photo used under CC-BY license from \xa0 Emmanuel Alanis . \n \n ___________________ \n 那麼如何更新BIOS？ 記得BIOS是固件或芯片上的軟件。 出現電源管理問題或處理器升級時，BIOS需要更新。 請始終在製造商的網站上查看最新固件版本。 在舊系統（1980年代至1990年代）中，實際的BIOS芯片必須完全更換。 在較新的系統中，BIOS被“刷新”。 刷新是一個特殊的過程，其中BIOS被覆蓋，除非絕對必要，否則不應該這樣做。 始終確保在執行BIOS刷新之前備份信息； 如果無法成功進行閃爍，則係統將無法恢復，甚至無法啟動。', 'tags': '', 'url': 'P.59.html'}, {'title': 'P.60', 'text': 'Explain the various types of expansion slots. \n Explain the differences between processors. \n Given a scenario, evaluate types and features of display devices. \n Install and configure expansion cards. \n Install and configure storage devices. \n 解釋各種類型的擴展插槽 \n 解釋處理器之間的差異 \n 給定場景，評估顯示設備的類型和功能 \n 安裝和配置擴充卡 \n 安裝和配置存儲設備', 'tags': '', 'url': 'P.60.html'}]};