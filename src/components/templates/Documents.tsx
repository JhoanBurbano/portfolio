import { FC, useEffect, useRef, useState } from "react";
import { RubberText, Lists } from "../atoms";
import { DocumentStyled } from "../styles";
import { Curriculum } from ".";
import { useReactToPrint } from "react-to-print";
import { DocumentsService } from "../../services";
import { IData } from "../../interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";


const Documents: FC = () => {
  const service$ = new DocumentsService();
  const DOCUS = ["Curriculum vitae", "English Certification"];
  const componentRef = useRef<Curriculum>(null)
  const [data, setData] = useState<IData>()

  function selectOption(id: number) {
    if(!id){
      data &&
      handlePrint()
    } else {
      data &&
      window.open(Object.entries(data.files[id])[0][1], '_blank')
    }
  }

  function getPdf(data: IData) {
    window.open(Object.entries(data.files[0])[0][1], '_blank')
  }

  const handlePrint = useReactToPrint({
	content: () => componentRef.current,
	documentTitle: "jhoan_burbano_curriculum_vitae",
	pageStyle: `

	@page {
        size: ledger;
        margin: 0;
    }

    @media print {

        .page {
            margin: 0;
            border: initial;
            border-radius: initial;
            width: initial;
            min-height: initial;
            box-shadow: initial;
            background: black;
            page-break-after: always;
        }
    }
	`,
  });

  useEffect(()=>{
	service$.getTranslate().then(
		(data_) => {
			return setData(data_.DOCUMENTS_PAGE.CURRICULUM.data);
		}
	)
  },[])

  return (
    <DocumentStyled>
      <div className="up">
        <RubberText word={"Documents"} />
        <Lists documents={DOCUS} selectOption={selectOption} />
      </div>
      <div className="down">
        <div className="viewer">
			{data && 
      <>
      <h3 className="filename">{data.filename}</h3>
      <Curriculum ref={componentRef} data={data}/>
		<div className="download" title="Download" onClick={()=>getPdf(data)}>
      <FontAwesomeIcon icon={faDownload}/>
    </div>
      </>
    }
        </div>
      </div>
    </DocumentStyled>
  );
};

export { Documents };

