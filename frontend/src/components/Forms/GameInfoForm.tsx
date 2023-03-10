import React from "react";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import { Dayjs } from "dayjs";
import { sportsCategory, subjectsRF } from "../../utils/constants";
import DateTextField from "../InputDate/InputDate";
import InputText from "../InputText/InputText";
import RadioOptionHand from "../RadioOption/RadioOptionHand";
import SelectOptions, { TOptions } from "../SelectOption/SelectOption";
import { SubmitBlock, SubmitButton } from "./Styles/MainFormStyles";

const Form = styled.form`
  margin: 24px auto 43px;
  max-width: 636px;

  @media (max-width: 1200px) {
    margin: 24px;
  }

  @media (max-width: 500px) {
    margin-left: 16px;
    margin-right: 16px;
    margin-bottom: 26px;
    max-width: 328px;
  }
`;

const Caption = styled.p`
  margin: 3px 0 24px 12px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.4px;
  color: rgba(0, 0, 0, 0.6);

  @media (max-width: 500px) {
    margin-bottom: 16px;
  }
`;

const Group = styled.div`
  display: flex;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const H3 = styled.h3`
  margin: 40px 0 24px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 160%;
  letter-spacing: 0.15px;
  color: #003200;

  @media (max-width: 500px) {
    margin-top: 24px;
    margin-bottom: 16px;
  }
`;

const InputWrapper = styled.div`
  width: 472px;
  margin-right: 20px;

  @media (max-width: 1000px) {
    width: 400px;
  }
`;

interface IGameInfoFormData {
  subjectValue?: TOptions;
  categoryValue?: TOptions;
  handValue?: string;
  dateAssignedCategoryValue?: Dayjs | null;
  dateBeginMedPolValue?: Dayjs | null;
  dateEndMedPolValue?: Dayjs | null;
  coachValue?: string;
  makerValue?: string;
  policyNumberValue?: string;
  dartWeightValue?: string;
  sertificateRUSADAValue?: string;
  dateBeginSertRUSADAValue?: Dayjs | null;
  dateEndSertRUSADAValue?: Dayjs | null;
}

export default function GameInfoForm({
  subjectValue,
  categoryValue,
  handValue,
  dateAssignedCategoryValue,
  dateBeginMedPolValue,
  dateEndMedPolValue,
  coachValue,
  makerValue,
  policyNumberValue,
  dartWeightValue,
  sertificateRUSADAValue,
  dateBeginSertRUSADAValue,
  dateEndSertRUSADAValue,
}: IGameInfoFormData) {
  const [gameInfoFormData, setGameInfoFormData] =
    React.useState<IGameInfoFormData>();
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      subjectRF: subjectValue,
      category: categoryValue,
      dateAssignedCategory: dateAssignedCategoryValue || null,
      coach: coachValue,
      maker: makerValue,
      hand: handValue || "",
      dartWeight: dartWeightValue,
      policyNumber: policyNumberValue,
      dateBeginMedPol: dateBeginMedPolValue || null,
      dateEndMedPol: dateEndMedPolValue || null,
      sertificateRUSADA: sertificateRUSADAValue,
      dateBeginSertRUSADA: dateBeginSertRUSADAValue || null,
      dateEndSertRUSADA: dateEndSertRUSADAValue || null,
    },
  });

  const url = window.location.pathname;
  const urlArray = url.split("/");
  const urlPath = urlArray[2];

  const [isEdit, setIsEdit] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (urlPath === "edit-player") {
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }
  }, [window.location.pathname]);

  const onSubmit = (data: any) => {
    setGameInfoFormData(data);
    return gameInfoFormData;
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="subjectRF"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <SelectOptions
              value={value}
              options={subjectsRF}
              inputHeight={56}
              label="?????????????? ????"
              sx={{
                width: 390,
                "@media(max-width: 500px)": {
                  width: "100%",
                },
              }}
              onChangeOption={onChange}
              onBlur={onBlur}
              error={!!errors.subjectRF?.message}
              helperText={errors.subjectRF?.message?.toString()}
            />
          )}
        />

        <Caption>????????????, ???? ?????????????? ???????????? ??????????????????</Caption>

        <Group>
          <Controller
            name="category"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <SelectOptions
                value={value}
                options={sportsCategory}
                inputHeight={56}
                label="???????????????????? ????????????"
                onChangeOption={onChange}
                onBlur={onBlur}
                error={!!errors.category?.message}
                helperText={errors.category?.message?.toString()}
                sx={{
                  mr: 2.5,
                  width: 300,
                  "@media(max-width: 500px)": {
                    width: "100%",
                  },
                }}
              />
            )}
          />
          <Controller
            name="dateAssignedCategory"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <DateTextField
                type="day"
                value={value}
                labelText="????????????????"
                inputHeight={56}
                onChangeHandler={onChange}
                onBlur={onBlur}
                error={!!errors.dateAssignedCategory?.message}
                helperText={errors.dateAssignedCategory?.message?.toString()}
                sx={{
                  width: 226,
                  "@media(max-width: 750px)": {
                    mt: 2,
                    width: 242,
                  },
                }}
              />
            )}
          />
        </Group>
        <Controller
          name="coach"
          control={control}
          rules={{
            minLength: {
              value: 2,
              message: "?????????? ???????????? ???????? ???????????? 1 ??????????????",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              value={value}
              label="?????? ??????????????"
              inputHeight={56}
              onBlur={onBlur}
              error={!!errors.coach?.message}
              helperText={errors.coach?.message?.toString()}
              sx={{
                maxWidth: 636,
                width: "100%",
                mt: 3,
                "@media(max-width: 1000px)": {
                  maxWidth: 564,
                },
                "@media(max-width: 500px)": {
                  mt: 2,
                },
              }}
              onChange={onChange}
            />
          )}
        />
        <Controller
          name="hand"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <RadioOptionHand
              value={value}
              label="?????????????? ????????"
              onChangeInput={onChange}
              onBlur={onBlur}
              error={!!errors.hand?.message}
              helperText={errors.category?.message?.toString()}
              sx={{
                mt: 3,
                "@media(max-width: 500px)": {
                  mt: 2,
                },
              }}
            />
          )}
        />
        <H3>??????????????</H3>
        <Group>
          <InputWrapper>
            <Controller
              name="maker"
              control={control}
              rules={{
                minLength: {
                  value: 2,
                  message: "?????????? ???????????? ???????? ???????????? 1 ??????????????",
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputText
                  value={value}
                  label="??????????????????????????"
                  inputHeight={56}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.maker?.message}
                  helperText={errors.category?.message?.toString()}
                  sx={{
                    mr: 2.5,
                    maxWidth: 472,
                    width: 472,
                    "@media(max-width: 1000px)": {
                      width: 400,
                    },
                    "@media(max-width: 500px)": {
                      width: 328,
                    },
                  }}
                />
              )}
            />
          </InputWrapper>

          <Controller
            name="dartWeight"
            control={control}
            rules={{
              minLength: {
                value: 2,
                message: "?????????? ???????????? ???????? ???????????? 1 ??????????????",
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputText
                value={value}
                label="??????"
                inputHeight={56}
                onChange={onChange}
                onBlur={onBlur}
                error={!!errors.dartWeight?.message}
                helperText={errors.category?.message?.toString()}
                sx={{
                  width: 144,
                  "@media(max-width: 750px)": {
                    mt: 2,
                    width: 156,
                  },
                }}
              />
            )}
          />
        </Group>
        <H3>?????????????????????? ??????????????????</H3>
        <Controller
          name="policyNumber"
          control={control}
          rules={{
            minLength: {
              value: 2,
              message: "?????????? ???????????? ???????? ???????????? 1 ??????????????",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              value={value}
              label="?????????? ????????????"
              inputHeight={56}
              onBlur={onBlur}
              error={!!errors.policyNumber?.message}
              helperText={errors.category?.message?.toString()}
              sx={{
                mb: 3,
                width: 472,
                "@media(max-width: 500px)": {
                  width: "100%",
                  mb: 2,
                },
              }}
              onChange={onChange}
            />
          )}
        />

        <Group>
          <Controller
            name="dateBeginMedPol"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <DateTextField
                value={value}
                type="day"
                labelText="???????????? ????????????????"
                inputHeight={56}
                onChangeHandler={onChange}
                onBlur={onBlur}
                error={!!errors.dateBeginMedPol?.message}
                helperText={errors.category?.message?.toString()}
                sx={{
                  mr: 2.5,
                  width: 226,
                  "@media(max-width: 750px)": {
                    width: 242,
                    mr: 0,
                  },
                }}
              />
            )}
          />

          <Controller
            name="dateEndMedPol"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <DateTextField
                disableFuture
                value={value}
                type="day"
                labelText="?????????? ????????????????"
                inputHeight={56}
                onChangeHandler={onChange}
                onBlur={onBlur}
                error={!!errors.dateEndMedPol?.message}
                helperText={errors.category?.message?.toString()}
                sx={{
                  width: 226,
                  "@media(max-width: 750px)": {
                    width: 242,
                    mt: 2,
                  },
                }}
              />
            )}
          />
        </Group>
        <H3>???????????????????? ????????Da</H3>

        <Controller
          name="sertificateRUSADA"
          control={control}
          rules={{
            minLength: {
              value: 2,
              message: "?????????? ???????????? ???????? ???????????? 1 ??????????????",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              value={value}
              label="ID ??????????????????????"
              inputHeight={56}
              onBlur={onBlur}
              error={!!errors.sertificateRUSADA?.message}
              helperText={errors.category?.message?.toString()}
              sx={{
                mb: 3,
                width: 472,
                "@media(max-width: 500px)": {
                  width: "100%",
                  mb: 2,
                },
              }}
              onChange={onChange}
            />
          )}
        />

        <Group>
          <Controller
            name="dateBeginSertRUSADA"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <DateTextField
                value={value}
                type="day"
                labelText="??????????"
                inputHeight={56}
                onChangeHandler={onChange}
                onBlur={onBlur}
                error={!!errors.dateBeginSertRUSADA?.message}
                helperText={errors.category?.message?.toString()}
                sx={{
                  mr: 2.5,
                  width: 226,
                  "@media(max-width: 750px)": {
                    width: 242,
                    mr: 0,
                  },
                }}
              />
            )}
          />

          <Controller
            name="dateEndSertRUSADA"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <DateTextField
                value={value}
                type="day"
                labelText="?????????? ????????????????"
                inputHeight={56}
                onChangeHandler={onChange}
                onBlur={onBlur}
                error={!!errors.dateEndSertRUSADA?.message}
                helperText={errors.category?.message?.toString()}
                sx={{
                  width: 226,
                  "@media(max-width: 750px)": {
                    width: 242,
                    mt: 2,
                  },
                }}
              />
            )}
          />
        </Group>
      </Form>
      {isEdit ? (
        <SubmitBlock>
          <SubmitButton
            colors="all-red"
            onClick={handleSubmit(onSubmit)}
            text="??????????????????"
            // customIcon="forward_arrow"
            reverse="right"
            disabled={!isValid}
          />
        </SubmitBlock>
      ) : (
        <SubmitBlock>
          <SubmitButton
            colors="all-red"
            onClick={handleSubmit(onSubmit)}
            text="??????????"
            customIcon="forward_arrow"
            reverse="right"
            disabled={!isValid}
          />
        </SubmitBlock>
      )}
    </>
  );
}
