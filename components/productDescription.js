import { Box, ScrollArea, Table, Skeleton } from "@mantine/core";

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
        <Table
        sx={{'td': {whiteSpace:"pre-line", verticalAlign: "top"}}}
        >
          <tbody>
          {isSuccess?
            Object.keys(data).filter((key) => Object.keys(niceLabels).includes(key) && data[key]).map((key) => (
              <tr key={key}>
                <td width="35%">{`${niceLabels[key]}:`}</td>
                <td>{Array.isArray(data[key])?data[key].join(" \n "):data[key]}</td>
              </tr>
            ))
          :
            [...Array(12).keys()].map(key => (
              <tr key={key}>
                <td width="35%"><Skeleton height="1.5em" width={50+((key*5)%3)*20-(key%4)*10} /></td>
                <td><Skeleton height="1.5em" width={150+((key*3)%4)*30-(key%3)*20} /></td>
              </tr>
            ))
          }
          </tbody>
        </Table>
      </ScrollArea>
    </Box>
  )
}