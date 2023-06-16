import { useState } from 'react';
import { View, Text } from '@tarojs/components';
import Taro, { useLoad } from '@tarojs/taro';
import { Document, Page, pdfjs } from 'react-pdf';
import { Icon } from '@nutui/nutui-react';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import './index.less';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
const options = {
  cMapUrl: 'cmaps/',
  standardFontDataUrl: 'standard_fonts/',
};
export default function Index() {
  const [pdfPath, setPdfPath] = useState(""); 
  const [numPages, setNumPages] = useState(0);

  useLoad(() => {
    console.log('Page loaded.');
    downloadPDF().then(r => r);
  });

  const downloadPDF = async () => {
    const res = await Taro.downloadFile({
      url: "https://zjjcmspublic.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/jcms_files/jcms1/web3163/site/attach/0/f44bf2ced2f1435eb1a3b59399206943.pdf",
      header: {
        "Access-Control-Allow-Origin": "*"
      },
      withCredentials: false
    });
    // console.log(res, "res");
    if (res?.statusCode === 200) setPdfPath(res?.tempFilePath);
  }

  // console.log(pdfPath, "pdfPath");

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      {
        pdfPath && (
          <Document 
            className={"pdfViewer"}
            file={{url: pdfPath}}
            onLoadSuccess={(res) => {
              console.log(res?.numPages, "res");
              setNumPages(res?.numPages);
            }}
            onLoadError={(err) => {
              console.log(err, "err");
            }}
            options={options}
          >
            {Array.from(new Array(numPages), (_, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} width={337} loading={<Icon name='loading' />} />
            ))}
          </Document>
        )
      }
    </View>
  )
}
