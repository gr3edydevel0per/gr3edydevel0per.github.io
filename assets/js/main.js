/************************* *
 * 
 * Functions for the Top-Bar
 * 
 ************************* */

function toggleDivVisibility(element) {
  if (element.style.display === 'none') {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}



/*
Functions for Individual apps
*/

function toggleStartMenuVisibility() {
  const div = document.getElementById("start-menu");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}

function toggleTerminalVisibility() {
  const terminal = document.getElementById("terminal-window");
  if (terminal.style.display === "none") {
    terminal.style.display = "block";
  } else {
    terminal.style.display = "none";
  }
}

function toggleSkillVisibility() {
  const skill = document.getElementById("skills-window");
  if (skill.style.display === "none") {
    skill.style.display = "block";
  } else {
    skill.style.display = "none";
  }
}

function toggleFileVisibility() {
  const skill = document.getElementById("file-explorer");
  if (skill.style.display === "none") {
    skill.style.display = "block";
  } else {
    skill.style.display = "none";
  }
}

function toggleResumeVisibility() {
  const skill = document.getElementById("resume");
  if (skill.style.display === "none") {
    skill.style.display = "block";
  } else {
    skill.style.display = "none";
  }
}

function toggleWhoamiVisibility() {
  const skill = document.getElementById("whoami");
  if (skill.style.display === "none") {
    skill.style.display = "block";
  } else {
    skill.style.display = "none";
  }
}
function toggleContactMeVisibility() {
  const skill = document.getElementById("contactme");
  if (skill.style.display === "none") {
    skill.style.display = "block";
  } else {
    skill.style.display = "none";
  }
}
// Add double click event listener to the toggle button
document
  .getElementById("terminal-toggle")
  .addEventListener("click", toggleDivVisibility);
document
  .getElementById("start-menu-btn")
  .addEventListener("click", toggleStartMenuVisibility);

window.addEventListener("load", function () {
  const preloader = document.getElementById("bootup");
  const content = document.querySelector(".main");
  setTimeout(function () {
    preloader.style.display = "none"; // Hide the preloader
    document.querySelector('.bootup-screen').style.display = 'flex';
    addLog();
  }, 5000);
});

function updateTime() {
  const timeElement = document.getElementById("time");
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  timeElement.textContent = `${hours}:${minutes}`;
}

setInterval(updateTime, 1000);
updateTime();

function maximizeScreen() {
  const obj = document.getElementById("terminal-window");
  if (obj.style.width === "800px") {
    obj.style.width = "100%";
    obj.style.height = "100%";
    obj.style.top = "0px";
    obj.style.left = "0px";
    obj.classList.remove("move"); // Remove the moving class from the
    obj.classList.remove("draggable");
    obj.onmousedown = null;
  } else {
    obj.style.width = "800px";
    obj.style.height = "500px";
    obj.style.margin = "0";
    obj.style.top = "50px";
    obj.style.left = "50px";
    obj.classList.add("move");
    obj.classList.add("draggable");
    obj.onmousedown = makeObjectToDrag(this);
  }
}


/* Linux Log */
const logTextElement = document.getElementById('log-text');
const loginScreenElement = document.getElementById('login-screen');

const logs = [
    "[    0.000000] Linux version 6.8.11-amd64 (devel@kali.org) (x86_64-linux-gnu-gcc-13 (Debian 13.2.0-25) 13.2.0, GNU ld (GNU Binutils for Debian) 2.42) #1 SMP PREEMPT_DYNAMIC Kali 6.8.11-1kali2 (2024-05-30),",
    "[    0.000000] Command line: BOOT_IMAGE=/boot/vmlinuz-6.8.11-amd64 root=UUID=53c51e6f-b75b-41bc-9fa1-7c012e1904e1 ro i915.enable_dc=0 intel_idle.max_cstate=2 snd_hda_intel.dmic_detect=0 quiet splash,",
    "[    0.000000] x86/split lock detection: #AC: crashing the kernel on kernel split_locks and warning on user-space split_locks,",
    "[    0.000000] NX (Execute Disable) protection: active,",
    "[    0.000000] APIC: Static calls initialized,",
    "[    0.000000] efi: EFI v2.8 by American Megatrends,",
    "[    0.000000] efi: ACPI=0x41108000 ACPI 2.0=0x41108014 TPMFinalLog=0x41195000 SMBIOS=0x424ed000 SMBIOS 3.0=0x424ec000 MEMATTR=0x333b3298 ESRT=0x3908b598 MOKvar=0x4253c000 INITRD=0x33364f18 RNG=0x41057018 TPMEventLog=0x33358018 ,",
    "[    0.000000] random: crng init done,",
    "[    0.000000] efi: Remove mem85: MMIO range=[0xc0000000-0xcfffffff] (256MB) from e820 map,",
    "[    0.000000] e820: remove [mem 0xc0000000-0xcfffffff] reserved,",
    "[    0.000000] efi: Not removing mem86: MMIO range=[0xfe000000-0xfe010fff] (68KB) from e820 map,",
    "[    0.019296] ACPI: Early table checksum verification disabled,",
    "[    0.019299] ACPI: RSDP 0x0000000041108014 000024 (v02 SECCSD),",
    "[    0.019302] ACPI: XSDT 0x0000000041107728 00010C (v01 SECCSD LH43STAR 01072009 AMI  01000013),",
    "[    0.019306] ACPI: FACP 0x0000000041101000 000114 (v06 SECCSD LH43STAR 01072009 AMI  01000013),",
    "[    0.019310] ACPI: DSDT 0x0000000041098000 068499 (v02 SECCSD LH43STAR 01072009 INTL 20200717),",
    "[    0.019312] ACPI: FACS 0x0000000041227000 000040,",
    "[    0.019314] ACPI: SSDT 0x0000000041102000 0044A0 (v02 DptfTb DptfTabl 00001000 INTL 20200717),",
    "[    0.019316] ACPI: FIDT 0x0000000041097000 00009C (v01 SECCSD LH43STAR 01072009 AMI  00010013),",
    "[    0.019318] ACPI: MSDM 0x0000000041096000 000055 (v03 SECCSD LH43STAR 01072009 AMI  01000013),",
    "[    0.019319] ACPI: SSDT 0x0000000041095000 00038C (v02 PmaxDv Pmax_Dev 00000001 INTL 20200717),",
    "[    0.019321] ACPI: SSDT 0x000000004108F000 005D0B (v02 CpuRef CpuSsdt  00003000 INTL 20200717),",
    "[    0.019323] ACPI: SSDT 0x000000004108C000 002B9D (v02 SaSsdt SaSsdt   00003000 INTL 20200717),",
    "[    0.019325] ACPI: SSDT 0x0000000041088000 0033D3 (v02 INTEL  IgfxSsdt 00003000 INTL 20200717),",
    "[    0.019327] ACPI: SSDT 0x000000004107A000 00D39F (v02 INTEL  TcssSsdt 00001000 INTL 20200717),",
    "[    0.019329] ACPI: HPET 0x0000000041079000 000038 (v01 SECCSD LH43STAR 01072009 AMI  01000013),",
    "[    0.019331] ACPI: APIC 0x0000000041078000 0001DC (v05 SECCSD LH43STAR 01072009 AMI  01000013),",
    "[    0.019332] ACPI: MCFG 0x0000000041077000 00003C (v01 SECCSD LH43STAR 01072009 AMI  01000013),",
    "[    0.019334] ACPI: SSDT 0x0000000041070000 0060C4 (v02 SECCSD AdlP_Rvp 00001000 INTL 20200717),",
    "[    0.019336] ACPI: UEFI 0x000000004117C000 000048 (v01 SECCSD LH43STAR 01072009 AMI  01000013),",
    "[    0.019338] ACPI: NHLT 0x000000004106E000 00189E (v00 SECCSD LH43STAR 01072009 AMI  01000013),",
    "[    0.019339] ACPI: LPIT 0x000000004106D000 0000CC (v01 SECCSD LH43STAR 01072009 AMI  01000013),",
    "[    0.019341] ACPI: SSDT 0x0000000041069000 002357 (v02 SECCSD TbtTypeC 00000000 INTL 20200717),",
    "[    0.019343] ACPI: DBGP 0x0000000041068000 000034 (v01 SECCSD LH43STAR 01072009 AMI  01000013),",
    "[    0.019345] ACPI: DBG2 0x0000000041067000 000054 (v00 SECCSD LH43STAR 01072009 AMI  01000013),",
    "[    0.019347] ACPI: DMAR 0x0000000041066000 000088 (v02 INTEL  EDK2     00000002      01000013),",
    "[    0.019348] ACPI: SSDT 0x0000000041065000 000B4F (v02 INTEL  xh_adlLP 00000000 INTL 20200717),",
    "[    0.019350] ACPI: SSDT 0x0000000041061000 003AEA (v02 SocGpe SocGpe   00003000 INTL 20200717),",
    "[    0.019352] ACPI: SSDT 0x000000004105D000 0035A2 (v02 SocCmn SocCmn   00003000 INTL 20200717),",
    "[    0.019354] ACPI: SSDT 0x000000004105C000 000144 (v02 Intel  ADebTabl 00001000 INTL 20200717),",
    "[    0.019356] ACPI: TPM2 0x000000004105B000 00004C (v04 SECCSD LH43STAR 00000001 AMI  00000000),",
    "[    0.019358] ACPI: PHAT 0x000000004105A000 0005CD (v01 SECCSD LH43STAR 00000005 MSFT 0100000D),",
    "[    0.019359] ACPI: WSMT 0x000000004106C000 000028 (v01 SECCSD LH43STAR 01072009 AMI  00010013),",
    "[    0.019361] ACPI: FPDT 0x0000000041059000 000044 (v01 SECCSD A M I    01072009 AMI  01000013),",
    "[    0.019363] ACPI: BGRT 0x0000000041058000 000038 (v01 SECCSD LH43STAR 01072009 AMI  00010013),",
    "[    0.019869] No NUMA configuration found,",
    "[    0.019870] Faking a node at [mem 0x0000000000000000-0x00000002b07fffff],",
    "[    0.019874] NODE_DATA(0) allocated [mem 0x2b07d5000-0x2b07fffff],",
    "[    0.019976] Zone ranges:,",
    "[    0.019976]   DMA      [mem 0x0000000000001000-0x0000000000ffffff],",
    "[    0.019977]   DMA32    [mem 0x0000000001000000-0x00000000ffffffff],",
    "[    0.019978]   Normal   [mem 0x0000000100000000-0x00000002b07fffff],",
    "[    0.019979]   Device   empty,",
    "[    0.019980] Movable zone start for each node,",
    "[    0.019981] Early memory node ranges,",
    "[    0.019981]   node   0: [mem 0x0000000000001000-0x000000000009dfff],",
    "[    0.019982]   node   0: [mem 0x000000000009f000-0x000000000009ffff],",
    "[    0.019982]   node   0: [mem 0x0000000000100000-0x000000002f792fff],",
    "[    0.019983]   node   0: [mem 0x000000002f794000-0x0000000031d3ffff],",
    "[    0.019983]   node   0: [mem 0x0000000031d41000-0x000000003cbc3fff],",
    "[    0.019984]   node   0: [mem 0x00000000427ff000-0x00000000427fffff],",
    "[    0.019984]   node   0: [mem 0x0000000100000000-0x00000002b07fffff],",
    "[    0.019985] Initmem setup node 0 [mem 0x0000000000001000-0x00000002b07fffff],",
    "[    0.019988] On node 0, zone DMA: 1 pages in unavailable ranges,",
    "[    0.019989] On node 0, zone DMA: 1 pages in unavailable ranges,",
    "[    0.020001] On node 0, zone DMA: 96 pages in unavailable ranges,",
    "[    0.020676] On node 0, zone DMA32: 1 pages in unavailable ranges,",
    "[    0.020870] On node 0, zone DMA32: 1 pages in unavailable ranges,",
    "[    0.021007] On node 0, zone DMA32: 23611 pages in unavailable ranges,",
    "[    0.021285] On node 0, zone Normal: 22528 pages in unavailable ranges,",
    "[    0.021457] On node 0, zone Normal: 30720 pages in unavailable ranges,",
    "[    0.021506] Reserving Intel graphics memory at [mem 0x4b800000-0x4f7fffff],",
    "[    0.022349] ACPI: PM-Timer IO Port: 0x1808,",
    "[    0.022354] ACPI: LAPIC_NMI (acpi_id[0x01] high edge lint[0x1]),",
    "[    0.022355] ACPI: LAPIC_NMI (acpi_id[0x02] high edge lint[0x1]),",
    "[    0.022356] ACPI: LAPIC_NMI (acpi_id[0x03] high edge lint[0x1]),",
    "[    0.022356] ACPI: LAPIC_NMI (acpi_id[0x04] high edge lint[0x1]),",
    "[    0.022357] ACPI: LAPIC_NMI (acpi_id[0x05] high edge lint[0x1]),",
    "[    0.022357] ACPI: LAPIC_NMI (acpi_id[0x06] high edge lint[0x1]),",
    "[    0.022358] ACPI: LAPIC_NMI (acpi_id[0x07] high edge lint[0x1]),",
    "[    0.022358] ACPI: LAPIC_NMI (acpi_id[0x08] high edge lint[0x1]),",
    "[    0.022358] ACPI: LAPIC_NMI (acpi_id[0x09] high edge lint[0x1]),",
    "[    0.022359] ACPI: LAPIC_NMI (acpi_id[0x0a] high edge lint[0x1]),",
    "[    0.022359] ACPI: LAPIC_NMI (acpi_id[0x0b] high edge lint[0x1]),",
    "[    0.022360] ACPI: LAPIC_NMI (acpi_id[0x0c] high edge lint[0x1]),",
    "[    0.022360] ACPI: LAPIC_NMI (acpi_id[0x0d] high edge lint[0x1]),",
    "[    0.022360] ACPI: LAPIC_NMI (acpi_id[0x0e] high edge lint[0x1]),",
    "[    0.022361] ACPI: LAPIC_NMI (acpi_id[0x0f] high edge lint[0x1]),",
    "[    0.022361] ACPI: LAPIC_NMI (acpi_id[0x10] high edge lint[0x1]),",
    "[    0.022362] ACPI: LAPIC_NMI (acpi_id[0x11] high edge lint[0x1]),",
    "[    0.022362] ACPI: LAPIC_NMI (acpi_id[0x12] high edge lint[0x1]),",
    "[    0.022362] ACPI: LAPIC_NMI (acpi_id[0x13] high edge lint[0x1]),",
    "[    0.022363] ACPI: LAPIC_NMI (acpi_id[0x14] high edge lint[0x1]),",
    "[    0.022363] ACPI: LAPIC_NMI (acpi_id[0x15] high edge lint[0x1]),",
    "[    0.022363] ACPI: LAPIC_NMI (acpi_id[0x16] high edge lint[0x1]),",
    "[    0.022364] ACPI: LAPIC_NMI (acpi_id[0x17] high edge lint[0x1]),",
    "[    0.022364] ACPI: LAPIC_NMI (acpi_id[0x00] high edge lint[0x1]),",
    "[    0.022482] IOAPIC[0]: apic_id 2, version 32, address 0xfec00000, GSI 0-119,",
    "[    0.022484] ACPI: INT_SRC_OVR (bus 0 bus_irq 0 global_irq 2 dfl dfl),",
    "[    0.022485] ACPI: INT_SRC_OVR (bus 0 bus_irq 9 global_irq 9 high level),",
    "[    0.022488] ACPI: Using ACPI (MADT) for SMP configuration information,",
    "[    0.022489] ACPI: HPET id: 0x8086a201 base: 0xfed00000,",
    "[    0.022493] e820: update [mem 0x3327f000-0x332e7fff] usable ==> reserved,",
    "[    0.022526] [mem 0x4f800000-0xfdffffff] available for PCI devices,",
    "[    0.022527] Booting paravirtualized kernel on bare hardware,",
    "[    8.212701] clk: Disabling unused clocks,",
    "[    8.213738] Freeing unused decrypted memory: 2028K,",
    "[    8.214248] Freeing unused kernel image (initmem) memory: 4028K,",
    "[    8.214250] Write protecting the kernel read-only data: 28672k,",
    "[    8.214580] Freeing unused kernel image (rodata/data gap) memory: 1528K,",
    "[    8.248524] x86/mm: Checked W+X mappings: passed, no W+X pages found.,",
    "[    8.248552] Run /init as init process,",
    "[    8.248567]   with arguments:,",
    "[    8.248574]     /init,",
    "[    8.248578]     splash,",
    "[    8.248579]   with environment:,",
    "[    8.248579]     HOME=/,",
    "[    8.248580]     TERM=linux,",
    "[    8.248580]     BOOT_IMAGE=/boot/vmlinuz-6.8.11-amd64,",
    "[    8.333382] input: Lid Switch as /devices/LNXSYSTM:00/LNXSYBUS:00/PNP0C0D:00/input/input1,",
    "[    8.333407] ACPI: button: Lid Switch [LID0],",
    "[    8.333447] input: Power Button as /devices/LNXSYSTM:00/LNXSYBUS:00/PNP0C0C:00/input/input2,",
    "[    8.333482] ACPI: button: Power Button [PWRB],",
    "[    8.333526] input: Power Button as /devices/LNXSYSTM:00/LNXPWRBN:00/input/input3,",
    "[    8.333598] ACPI: button: Power Button [PWRF],",
    "[    8.368309] ACPI: bus type drm_connector registered,",
    "[    8.448380] ACPI: battery: Slot [BAT1] (battery present),",
    "[    8.453830] i801_smbus 0000:00:1f.4: enabling device (0000 -> 0003),",
    "[    8.454144] i801_smbus 0000:00:1f.4: SPD Write Disable is set,",
    "[    8.454242] i801_smbus 0000:00:1f.4: SMBus using PCI interrupt,",
    "[    8.457614] hid: raw HID events driver (C) Jiri Kosina,",
    "[    8.458618] i2c i2c-0: 8/8 memory slots populated (from DMI),",
    "[    8.467063] ACPI: bus type USB registered,",
    "[    8.467093] usbcore: registered new interface driver usbfs,",
    "[    8.467102] usbcore: registered new interface driver hub,",
    "[    8.467115] usbcore: registered new device driver usb,",
    "[    8.467636] intel-lpss 0000:00:15.0: enabling device (0004 -> 0006),",
    "[    8.468094] idma64 idma64.0: Found Intel integrated DMA 64-bit,",
    "[    8.487953] intel-lpss 0000:00:15.3: enabling device (0004 -> 0006),",
    "[    8.488387] idma64 idma64.1: Found Intel integrated DMA 64-bit,",
    "[    8.811316] xhci_hcd 0000:00:0d.0: xHCI Host Controller,",
    "[    8.811335] xhci_hcd 0000:00:0d.0: new USB bus registered, assigned bus number 1,",
    "[    8.812546] xhci_hcd 0000:00:0d.0: hcc params 0x20007fc1 hci version 0x120 quirks 0x0000000200009810,",
    "[    8.813037] xhci_hcd 0000:00:0d.0: xHCI Host Controller,",
    "[    8.813045] xhci_hcd 0000:00:0d.0: new USB bus registered, assigned bus number 2,",
    "[    8.813052] xhci_hcd 0000:00:0d.0: Host supports USB 3.2 Enhanced SuperSpeed,",
    "[    8.813196] usb usb1: New USB device found, idVendor=1d6b, idProduct=0002, bcdDevice= 6.08,",
    "[    8.813207] usb usb1: New USB device strings: Mfr=3, Product=2, SerialNumber=1,",
    "[    8.813211] usb usb1: Product: xHCI Host Controller,",
    "[    8.813214] usb usb1: Manufacturer: Linux 6.8.11-amd64 xhci-hcd,",
    "[    8.813217] usb usb1: SerialNumber: 0000:00:0d.0,",
    "[    8.813470] hub 1-0:1.0: USB hub found,",
    "[    8.813482] hub 1-0:1.0: 1 port detected,",
    "[    8.813570] input: SPPT2600:00 0911:5288 Mouse as /devices/pci0000:00/0000:00:15.0/i2c_designware.0/i2c-1/i2c-SPPT2600:00/0018:0911:5288.0001/input/input4,",
    "[    8.813618] input: SPPT2600:00 0911:5288 Touchpad as /devices/pci0000:00/0000:00:15.0/i2c_designware.0/i2c-1/i2c-SPPT2600:00/0018:0911:5288.0001/input/input5,",
    "[    8.813660] input: SPPT2600:00 0911:5288 as /devices/pci0000:00/0000:00:15.0/i2c_designware.0/i2c-1/i2c-SPPT2600:00/0018:0911:5288.0001/input/input6,",
    "[    8.813771] usb usb2: New USB device found, idVendor=1d6b, idProduct=0003, bcdDevice= 6.08,",
    "[    8.813775] usb usb2: New USB device strings: Mfr=3, Product=2, SerialNumber=1,",
    "[    8.813777] usb usb2: Product: xHCI Host Controller,",
    "[    8.813778] usb usb2: Manufacturer: Linux 6.8.11-amd64 xhci-hcd,",
    "[    8.813779] usb usb2: SerialNumber: 0000:00:0d.0,",
    "[    8.813817] hid-generic 0018:0911:5288.0001: input,hidraw0: I2C HID v1.00 Mouse [SPPT2600:00 0911:5288] on i2c-SPPT2600:00,",
    "[    8.813883] hub 2-0:1.0: USB hub found,",
    "[    8.813897] hub 2-0:1.0: 3 ports detected,",
    "[    8.813990] ACPI BIOS Error (bug): Could not resolve symbol [\_SB.UBTC.RUCC], AE_NOT_FOUND (20230628/psargs-330),",
    "[    8.814066] ACPI BIOS Error (bug): Could not resolve symbol [\_SB.UBTC.RUCC], AE_NOT_FOUND (20230628/psargs-330),",
    "[    8.814546] xhci_hcd 0000:00:14.0: xHCI Host Controller,",
    "[    8.814552] xhci_hcd 0000:00:14.0: new USB bus registered, assigned bus number 3,",
    "[    8.815813] xhci_hcd 0000:00:14.0: hcc params 0x20007fc1 hci version 0x120 quirks 0x0000100200009810,",
    "[    8.816285] xhci_hcd 0000:00:14.0: xHCI Host Controller,",
    "[    8.816289] xhci_hcd 0000:00:14.0: new USB bus registered, assigned bus number 4,",
    "[    8.816292] xhci_hcd 0000:00:14.0: Host supports USB 3.1 Enhanced SuperSpeed,",
    "[    8.816340] usb usb3: New USB device found, idVendor=1d6b, idProduct=0002, bcdDevice= 6.08,",
    "[    8.816342] usb usb3: New USB device strings: Mfr=3, Product=2, SerialNumber=1,",
    "[    8.816343] usb usb3: Product: xHCI Host Controller,",
    "[    8.816344] usb usb3: Manufacturer: Linux 6.8.11-amd64 xhci-hcd,",
    "[    8.816345] usb usb3: SerialNumber: 0000:00:14.0,",
    "[    8.816472] hub 3-0:1.0: USB hub found,",
    "[    8.816513] hub 3-0:1.0: 12 ports detected,",
    "[    8.816539] ACPI BIOS Error (bug): Could not resolve symbol [\_SB.UBTC.RUCC], AE_NOT_FOUND (20230628/psargs-330),",
    "[    9.167044] i915 0000:00:02.0: Port A asks to use VBT vswing/preemph tables,",
    "[    9.167058] WARNING: CPU: 2 PID: 240 at drivers/gpu/drm/i915/display/intel_bios.c:2675 intel_bios_init+0x1765/0x1d60 [i915],",
    "[    9.167320] Modules linked in: i915(+) crc32_pclmul drm_buddy i2c_algo_bit crc32c_intel nvme drm_display_helper nvme_core cec t10_pi hid_generic rc_core ghash_clmulni_intel xhci_pci crc64_rocksoft_generic crc64_rocksoft crc_t10dif i2c_hid_acpi sha512_ssse3 xhci_hcd ttm i2c_hid sha512_generic crct10dif_generic usbcore drm_kms_helper hid intel_lpss_pci video crct10dif_pclmul i2c_i801 sha256_ssse3 intel_lpss crc64 drm sha1_ssse3 i2c_smbus crct10dif_common idma64 usb_common battery fan wmi button aesni_intel crypto_simd cryptd,",
    "[    9.167357] CPU: 2 PID: 240 Comm: (udev-worker) Tainted: G     U             6.8.11-amd64 #1  Kali 6.8.11-1kali2,",
    "[    9.167361] Hardware name: SAMSUNG ELECTRONICS CO., LTD. 750XED/NP750XED-KC1IN, BIOS P13CFG.039.230726.HQ 07/26/2023,",
    "[    9.167362] RIP: 0010:intel_bios_init+0x1765/0x1d60 [i915],",
    "[    9.167548] Code: 48 8b 7d 08 48 8b 5f 50 48 85 db 75 03 48 8b 1f e8 20 57 43 cc 44 89 e9 48 89 da 48 c7 c7 a8 19 aa c0 48 89 c6 e8 cb 5f c4 cb <0f> 0b e9 99 fd ff ff 89 d1 c1 e1 1f 85 d1 0f 85 98 fe ff ff 4c 89,",
    "[    9.167550] RSP: 0018:ffffb290c07e79d0 EFLAGS: 00010282,",
    "[    9.167552] RAX: 0000000000000000 RBX: ffff8ea4020b16b0 RCX: ffffffff8e0d2308,",
    "[    9.167554] RDX: 0000000000000000 RSI: 00000000ffffefff RDI: 0000000000000001,",
    "[    9.167555] RBP: ffff8ea416488000 R08: 0000000000000000 R09: ffffb290c07e7860,",
    "[    9.167557] R10: ffffb290c07e7858 R11: 0000000000000003 R12: 0000000000000001,",
    "[    9.167558] R13: 0000000000000041 R14: 0000000000000000 R15: ffff8ea40f384660,",
    "[    9.167559] FS:  00007feabc84fd00(0000) GS:ffff8ea5a8280000(0000) knlGS:0000000000000000,",
    "[    9.167561] CS:  0010 DS: 0000 ES: 0000 CR0: 0000000080050033,",
    "[    9.167562] CR2: 000055b3d507e820 CR3: 0000000105302000 CR4: 0000000000f50ef0,",
    "[    9.167564] PKRU: 55555554,",
    "[    9.167565] Call Trace:,",
    "[    9.167568]  <TASK>,",
    "[    9.167570]  ? intel_bios_init+0x1765/0x1d60 [i915],",
    "[    9.167704]  ? __warn+0x81/0x130,",
    "[    9.167709]  ? intel_bios_init+0x1765/0x1d60 [i915],",
    "[    9.167810]  ? report_bug+0x171/0x1a0,",
    "[    9.167812]  ? console_unlock+0x78/0x120,",
    "[    9.167815]  ? handle_bug+0x3c/0x80,",
    "[    9.167818]  ? exc_invalid_op+0x17/0x70,",
    "[    9.167820]  ? asm_exc_invalid_op+0x1a/0x20,",
    "[    9.167824]  ? intel_bios_init+0x1765/0x1d60 [i915],",
    "[    9.167948]  ? drm_vblank_worker_init+0x6b/0x80 [drm],",
    "[    9.168002]  intel_display_driver_probe_noirq+0x39/0x230 [i915],",
    "[    9.168219]  i915_driver_probe+0x632/0xba0 [i915],",
    "[    9.168337]  local_pci_probe+0x42/0xa0,",
    "[    9.168340]  pci_device_probe+0xc7/0x240,",
    "[    9.168343]  really_probe+0x19b/0x3e0,",
    "[    9.168346]  ? __pfx___driver_attach+0x10/0x10,",
    "[    9.168348]  __driver_probe_device+0x78/0x160,",
    "[    9.168350]  driver_probe_device+0x1f/0x90,",
    "[    9.168352]  __driver_attach+0xd2/0x1c0,",
    "[    9.168354]  bus_for_each_dev+0x85/0xd0,",
    "[    9.168356]  bus_add_driver+0x116/0x220,",
    "[    9.168358]  driver_register+0x59/0x100,",
    "[    9.168361]  i915_init+0x22/0xc0 [i915],",
    "[    9.168443]  ? __pfx_i915_init+0x10/0x10 [i915],",
    "[    9.168522]  do_one_initcall+0x58/0x320,",
    "[    9.168526]  do_init_module+0x60/0x240,",
    "[    9.168528]  init_module_from_file+0x89/0xe0,",
    "[    9.168530]  idempotent_init_module+0x120/0x2b0,",
    "[    9.168532]  __x64_sys_finit_module+0x5e/0xb0,",
    "[    9.168533]  do_syscall_64+0x83/0x190,",
    "[    9.168535]  ? ksys_read+0x6f/0xf0,",
    "[    9.168538]  ? syscall_exit_to_user_mode+0x88/0x220,",
    "[    9.168540]  ? do_syscall_64+0x8f/0x190,",
    "[    9.168541]  ? do_syscall_64+0x8f/0x190,",
    "[    9.168542]  ? do_syscall_64+0x8f/0x190,",
    "[    9.168543]  ? exc_page_fault+0x7f/0x180,",
    "[    9.168545]  entry_SYSCALL_64_after_hwframe+0x78/0x80,",
    "[    9.168547] RIP: 0033:0x7feabd07b9f9,",
    "[    9.168549] Code: ff c3 66 2e 0f 1f 84 00 00 00 00 00 0f 1f 44 00 00 48 89 f8 48 89 f7 48 89 d6 48 89 ca 4d 89 c2 4d 89 c8 4c 8b 4c 24 08 0f 05 <48> 3d 01 f0 ff ff 73 01 c3 48 8b 0d f7 c3 0c 00 f7 d8 64 89 01 48,",
    "[    9.168550] RSP: 002b:00007fff8f6c95c8 EFLAGS: 00000246 ORIG_RAX: 0000000000000139,",
    "[    9.168551] RAX: ffffffffffffffda RBX: 000055b3d50b3420 RCX: 00007feabd07b9f9,",
    "[    9.168552] RDX: 0000000000000000 RSI: 000055b3d50b1590 RDI: 000000000000001f,",
    "[    9.168552] RBP: 0000000000000000 R08: 0000000000000001 R09: 000055b3d504e440,",
    "[    9.168553] R10: 0000000000000040 R11: 0000000000000246 R12: 000055b3d50b1590,",
    "[    9.168554] R13: 0000000000020000 R14: 000055b3d50b2360 R15: 000055b3d50b1590,",
    "[    9.168555]  </TASK>,",
    "[    9.168555] ---[ end trace 0000000000000000 ]---,",
    "[    9.168556] ------------[ cut here ]------------,",
    "[    9.168556] i915 0000:00:02.0: Port B asks to use VBT vswing/preemph tables,",
    "[    9.168562] WARNING: CPU: 2 PID: 240 at drivers/gpu/drm/i915/display/intel_bios.c:2675 intel_bios_init+0x1765/0x1d60 [i915],",
    "[    9.168651] Modules linked in: i915(+) crc32_pclmul drm_buddy i2c_algo_bit crc32c_intel nvme drm_display_helper nvme_core cec t10_pi hid_generic rc_core ghash_clmulni_intel xhci_pci crc64_rocksoft_generic crc64_rocksoft crc_t10dif i2c_hid_acpi sha512_ssse3 xhci_hcd ttm i2c_hid sha512_generic crct10dif_generic usbcore drm_kms_helper hid intel_lpss_pci video crct10dif_pclmul i2c_i801 sha256_ssse3 intel_lpss crc64 drm sha1_ssse3 i2c_smbus crct10dif_common idma64 usb_common battery fan wmi button aesni_intel crypto_simd cryptd,",
    "[    9.168664] CPU: 2 PID: 240 Comm: (udev-worker) Tainted: G     U  W          6.8.11-amd64 #1  Kali 6.8.11-1kali2,",
    "[    9.168666] Hardware name: SAMSUNG ELECTRONICS CO., LTD. 750XED/NP750XED-KC1IN, BIOS P13CFG.039.230726.HQ 07/26/2023,",
    "[    9.168666] RIP: 0010:intel_bios_init+0x1765/0x1d60 [i915],",
    "[    9.168747] Code: 48 8b 7d 08 48 8b 5f 50 48 85 db 75 03 48 8b 1f e8 20 57 43 cc 44 89 e9 48 89 da 48 c7 c7 a8 19 aa c0 48 89 c6 e8 cb 5f c4 cb <0f> 0b e9 99 fd ff ff 89 d1 c1 e1 1f 85 d1 0f 85 98 fe ff ff 4c 89,",
    "[    9.168748] RSP: 0018:ffffb290c07e79d0 EFLAGS: 00010282,",
    "[    9.168749] RAX: 0000000000000000 RBX: ffff8ea4020b16b0 RCX: ffffffff8e0d2308,",
    "[    9.168750] RDX: 0000000000000000 RSI: 00000000ffffefff RDI: 0000000000000001,",
    "[    9.168750] RBP: ffff8ea416488000 R08: 0000000000000000 R09: ffffb290c07e7860,",
    "[    9.168751] R10: ffffb290c07e7858 R11: 0000000000000003 R12: 0000000000000001,",
    "[    9.168751] R13: 0000000000000042 R14: 0000000000000000 R15: ffff8ea40f384e40,",
    "[    9.168752] FS:  00007feabc84fd00(0000) GS:ffff8ea5a8280000(0000) knlGS:0000000000000000,",
    "[    9.168753] CS:  0010 DS: 0000 ES: 0000 CR0: 0000000080050033,",
    "[    9.168754] CR2: 000055b3d507e820 CR3: 0000000105302000 CR4: 0000000000f50ef0,",
    "[    9.168754] PKRU: 55555554,",

];

let index = 0;

function addLog() {
    if (index < logs.length) {
        const logLine = document.createElement('div');
        logLine.textContent = logs[index];
        logTextElement.appendChild(logLine);
        logTextElement.scrollTop = logTextElement.scrollHeight; // Auto-scroll to the bottom
        index++;
        setTimeout(addLog, 5); // Adjust speed of log appearance
    } else {
        document.querySelector('.bootup-screen').style.display = 'none';
        const content = document.querySelector(".main").style.display = 'block';
    }
}

