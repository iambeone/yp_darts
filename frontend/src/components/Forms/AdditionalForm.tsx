import React, { useState } from "react";
import { Stack } from "@mui/system";
import { Grid, Typography, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { Dayjs } from "dayjs";
import { Form, ButtonWrapper } from "./Styles/AdditionalFormStyles";
import InputText from "../InputText/InputText";
import SelectOption from "../SelectOption/SelectOption";
import DateTextField from "../InputDate/InputDate";
import UploadInput from "../UploadInput/UploadInput";
import {
  clothingSizeOptions,
  educationLevelOptions,
} from "../../utils/constants";

type TOptions = {
  id: number;
  title: string;
};

interface AdditionalFormProps {
  weightValue?: string;
  heightValue?: string;
  clothingSizeValue?: TOptions;
  hobbyValue?: string;
  institutionValue?: string;
  graduationDateValue?: Dayjs | null;
  educationLevelValue?: TOptions;
  specializationValue?: string;
}

const defaultProps: Partial<AdditionalFormProps> = {
  weightValue: "",
  heightValue: "",
  clothingSizeValue: undefined,
  hobbyValue: "",
  institutionValue: "",
  graduationDateValue: null,
  educationLevelValue: undefined,
  specializationValue: "",
};

function AdditionalForm({
  weightValue,
  heightValue,
  clothingSizeValue,
  hobbyValue,
  institutionValue,
  graduationDateValue,
  educationLevelValue,
  specializationValue,
}: AdditionalFormProps) {
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      weight: weightValue,
      height: heightValue,
      clothingSize: clothingSizeValue,
      hobby: hobbyValue,
      institution: institutionValue,
      graduationDate: graduationDateValue || null,
      educationLevel: educationLevelValue,
      specialization: specializationValue,
    },
  });

  const url = window.location.pathname;
  const urlArray = url.split("/");
  const urlPath = urlArray[2];

  const [file, setFile] = useState<File | null>(null);
  const [isEdit, setIsEdit] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (urlPath === "edit-player") {
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }
  }, [window.location.pathname]);

  const onSubmit = (data: any) => {
    return { ...data, file };
  };

  return (
    <Stack direction="column" alignItems="center">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          direction="column"
          sx={{ px: { xs: 2, sm: 3 }, pt: 3, pb: { xs: 9, sm: 25 } }}
          spacing={{ xs: 3, sm: 5 }}
        >
          <Stack direction="column" spacing={{ xs: 2, sm: 3 }}>
            <Grid
              container
              direction="row"
              flexWrap="wrap"
              spacing={{ xs: 2, sm: 2.5 }}
            >
              <Grid item>
                <Controller
                  name="weight"
                  control={control}
                  rules={{
                    pattern: {
                      value: /^[0-9]+(,[0-9]{1,4})?$/,
                      message: "???????????????????? ??????????????: ?????????? 0-9, ??????????????",
                    },
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <InputText
                      label="??????"
                      name="weight"
                      size="small"
                      sx={{
                        width: 156,
                        "@media(min-width: 834px)": {
                          width: 144,
                        },
                      }}
                      maskName="normal"
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                      error={Boolean(errors.weight?.message)}
                      helperText={errors.weight?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item>
                <Controller
                  name="height"
                  control={control}
                  rules={{
                    pattern: {
                      value: /^[0-9]+(,[0-9]{1,4})?$/,
                      message: "???????????????????? ??????????????: ?????????? 0-9, ??????????????",
                    },
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <InputText
                      label="????????"
                      name="height"
                      size="small"
                      sx={{
                        width: 156,
                        "@media(min-width: 834px)": {
                          width: 144,
                        },
                      }}
                      maskName="normal"
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                      error={Boolean(errors.height?.message)}
                      helperText={errors.height?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item>
                <Controller
                  name="clothingSize"
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <SelectOption
                      label="???????????? ????????????"
                      inputHeight={56}
                      sx={{
                        width: 140,
                        "@media(min-width: 834px)": {
                          width: 144,
                        },
                      }}
                      value={value}
                      onChangeOption={onChange}
                      onBlur={onBlur}
                      options={clothingSizeOptions}
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Controller
              name="hobby"
              control={control}
              rules={{
                pattern: {
                  value: /^[??-????-??????a-zA-Z0-9\s\-.,]+$/,
                  message:
                    "???????????????????? ??????????????: ??????????????????????????, ??????????????????, ?????????? 0-9, ????????????, ????????, ??????????, ??????????????.",
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputText
                  label="??????????, ???????????? ????????????????"
                  name="hobby"
                  size="large"
                  sx={{
                    width: "100%",
                    maxWidth: 636,
                  }}
                  maskName="normal"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={Boolean(errors.hobby?.message)}
                  helperText={errors.hobby?.message}
                />
              )}
            />
          </Stack>

          <Stack direction="column" spacing={{ xs: 2, sm: 3 }}>
            <Typography variant="h6" sx={{ color: "#003200" }}>
              ??????????????????????
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 2.5 }}
            >
              <Controller
                name="institution"
                control={control}
                rules={{
                  pattern: {
                    value: /^[??-????-??????a-zA-Z0-9\s\-.,]+$/,
                    message:
                      "???????????????????? ??????????????: ??????????????????????????, ??????????????????, ?????????? 0-9, ????????????, ????????, ??????????, ??????????????.",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <InputText
                    label="?????????????? ??????????????????"
                    name="institution"
                    size="large"
                    sx={{
                      width: "100%",
                      maxWidth: 472,
                    }}
                    maskName="normal"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={Boolean(errors.institution?.message)}
                    helperText={errors.institution?.message}
                  />
                )}
              />
              <Controller
                name="graduationDate"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <DateTextField
                    labelText="?????? ??????????????????"
                    inputHeight={56}
                    sx={{
                      width: 140,
                      "@media(min-width: 834px)": {
                        width: 144,
                      },
                    }}
                    type="year"
                    disableFuture
                    value={value}
                    onChangeHandler={onChange}
                    onBlur={onBlur}
                    error={Boolean(errors.graduationDate?.message)}
                    helperText={errors.graduationDate?.message}
                  />
                )}
              />
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 2.5 }}
            >
              <Controller
                name="educationLevel"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <SelectOption
                    label="??????????????"
                    inputHeight={56}
                    sx={{
                      width: 242,
                      "@media(min-width: 834px)": {
                        width: 226,
                      },
                    }}
                    value={value}
                    onChangeOption={onChange}
                    onBlur={onBlur}
                    options={educationLevelOptions}
                  />
                )}
              />
              <Controller
                name="specialization"
                control={control}
                rules={{
                  pattern: {
                    value: /^[??-????-??????a-zA-Z0-9\s\-.,]+$/,
                    message:
                      "???????????????????? ??????????????: ??????????????????????????, ??????????????????, ?????????? 0-9, ????????????, ????????, ??????????, ??????????????.",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <InputText
                    label="??????????????????????????"
                    name="specialization"
                    size="large"
                    sx={{
                      width: "100%",
                      maxWidth: 390,
                    }}
                    maskName="normal"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={Boolean(errors.specialization?.message)}
                    helperText={errors.specialization?.message}
                  />
                )}
              />
            </Stack>
          </Stack>

          <Stack direction="column" spacing={3}>
            <Typography variant="h6" sx={{ color: "#003200" }}>
              ????????????????????
            </Typography>
            <UploadInput onFileSelect={setFile} />
          </Stack>
        </Stack>
      </Form>

      <ButtonWrapper>
        {isEdit ? (
          <Button
            size="medium"
            variant="contained"
            sx={{
              padding: "6px 16px",
              alignSelf: "center",
              backgroundColor: "#D32F2F",
              borderRadius: "100px",
              boxShadow:
                "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
              "@media(min-width: 834px)": {
                padding: "8px 22px",
              },
              "&:disabled": {
                background: "rgba(0, 0, 0, 0.12)",
                boxShadow: "0",
              },
            }}
            disabled={!isValid}
            onClick={handleSubmit(onSubmit)}
          >
            <Typography
              variant="button"
              sx={{
                fontSize: 14,
                lineHeight: 1.71,
                "@media(min-width: 834px)": {
                  fontSize: 15,
                  lineHeight: 1.73,
                },
              }}
            >
              ??????????????????
            </Typography>
          </Button>
        ) : (
          <Button
            size="medium"
            variant="contained"
            sx={{
              padding: "6px 16px",
              alignSelf: "center",
              backgroundColor: "#D32F2F",
              borderRadius: "100px",
              boxShadow:
                "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
              "@media(min-width: 834px)": {
                padding: "8px 22px",
              },
              "&:disabled": {
                background: "rgba(0, 0, 0, 0.12)",
                boxShadow: "0",
              },
            }}
            disabled={!isValid}
            onClick={handleSubmit(onSubmit)}
          >
            <Typography
              variant="button"
              sx={{
                fontSize: 14,
                lineHeight: 1.71,
                "@media(min-width: 834px)": {
                  fontSize: 15,
                  lineHeight: 1.73,
                },
              }}
            >
              ?????????????? ????????????
            </Typography>
          </Button>
        )}
      </ButtonWrapper>
    </Stack>
  );
}

AdditionalForm.defaultProps = defaultProps;

export default AdditionalForm;
