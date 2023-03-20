import { Button, Spinner } from "@chakra-ui/react";
import { useState } from "react";

export default function UploadCsv() {
    const [loadingCsvFile, setLoadingCsvFile] = useState(false);
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        let file = event.target.files[0];
        setFile({ file: file });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(file);

        uploadFile();
    };

    const uploadFile = () => {
        const userToken = localStorage.getItem("token");
        const formData = new FormData();
        formData.append("cardFile", file);

        setLoadingCsvFile(true);
        fetch("https://monmouth.onrender.com/v1/card/add-cards", {
            method: "POST",
            body: formData,
            "Content-Type": "multipart/form-data",
            Authorisation: "Bearer " + userToken,
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                    setLoadingCsvFile(false);
                }
                setLoadingCsvFile(false);
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setLoadingCsvFile(false);
            })
            .catch((error) => {
                console.error("Error uploading file:", error);
                setLoadingCsvFile(false);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" name="cardFile" onChange={handleFileChange} />
            {loadingCsvFile ? <Spinner /> : ""}
            <Button
                type="submit"
                isDisabled={file === null ? true : false}
                bgColor="brand.primary"
            >
                Upload
            </Button>
        </form>
    );
}
