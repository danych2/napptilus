import { Box, ScrollArea, Text } from "@mantine/core";

export default function ProductDescription({data, isSuccess}) {
  const niceLabels={
    brand: 'Brand',
    model: 'Model',
    price: 'Price',
    networkTechnology: 'Network technology',
    networkSpeed: 'Network speed',
    gprs: 'GPRS',
    edge: 'Edge',
    announced: 'Announced on',
    status: 'Status',
    dimentions: 'Dimensions',
    weight: 'Weight',
    sim: 'SIM',
    displayType: 'Display type',
    displayResolution: 'Display resolution',
    displaySize: 'Display size',
    os: 'OS',
    cpu: 'CPU',
    chipset: 'Chipset',
    gpu: 'GPU',
    externalMemory: 'External memory',
    internalMemory: 'Internal memory',
    ram: 'RAM',
    primaryCamera: 'Primary camera',
    secondaryCmera: 'Secondary camera',
    speaker: 'Speaker',
    audioJack: 'Audio jack',
    wlan: 'WLAN',
    bluetooth: 'Bluetooth',
    gps: 'GPS',
    nfc: 'NFC',
    radio: 'Radio',
    usb: 'USB',
    sensors: 'Sensors',
    battery: 'Battery',
    colors: 'Colors',
  };

  return (
    <Box style={{height:"55%"}}>
      <ScrollArea style={{height:"100%"}}>
        {isSuccess?
          Object.keys(data).filter((key) => Object.keys(niceLabels).includes(key) && data[key]).map((key) => (
            <Text key={key}>{`${niceLabels[key]}: ${data[key]}`}</Text>
          ))
        :
          'Loading'
        }
      </ScrollArea>
    </Box>
  )
}