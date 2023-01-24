import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import Typography from "@mui/material/Typography";
import { ImageWrapper, UploadLink, AdditionalText } from "./UploadInputStyles";

interface UploadInputProps {
  onFileSelect: (value: File) => void;
}

function UploadInput({ onFileSelect }: UploadInputProps) {
  const [fileName, setFileName] = useState("");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length) {
      onFileSelect(acceptedFiles[0]);
      const { name } = acceptedFiles[0];
      setFileName(name);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpeg"],
      "image/png": [".png"],
    },
  });

  return (
    <Box
      sx={{
        width: "100%",
        px: 2,
        py: 3,
        border: "1px dashed rgba(0, 0, 0, 0.12)",
        borderRadius: 1,
        boxSizing: "border-box",
      }}
      {...getRootProps()}
    >
      <input id="avatarImage" {...getInputProps()} />
      <Stack alignItems="center" spacing={1}>
        <Tooltip title="Выбор файла">
          <ImageWrapper>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <Icon color="primary">upload_file</Icon>
            </IconButton>
          </ImageWrapper>
        </Tooltip>

        <label>
          {fileName ? (
            <Typography variant="subtitle1">{fileName}</Typography>
          ) : (
            <Typography variant="subtitle1">
              <UploadLink>Нажмите для выбора файла</UploadLink>
              <AdditionalText> или перетащите сюда</AdditionalText>
            </Typography>
          )}
        </label>

        <Typography variant="body2" sx={{ color: "rgba(0, 0, 0, 0.54)" }}>
          Допустимый формат: JPG, PNG
        </Typography>
      </Stack>
    </Box>
  );
}

export default UploadInput;
