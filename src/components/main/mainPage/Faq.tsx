import { useEffect, useState } from "react";
import styled from "../../../styles/styled"
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import ArrowIcon, { ArrowIconEnum } from "../../../static/images/ArrowIcon";
import Vocabulary, { useVocabulary } from "../../../translation/vocabulary";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getFaqData } from "../../../redux/mainPage/mainPageSelector";
import { mainPageActions } from "../../../redux/mainPage/mainPageReducer";
import { useTranslation } from "react-i18next";

const FaqStyled = styled.section`
    width: 1100px;
    margin: 100px auto 100px auto ;
    h2 {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: 70px;
        line-height: 60px;
        margin-bottom: 20px
    }

    dt {
        height: 60px;

        div {
            height: 100%;
        }

        span {
            font-size: 18px;
            line-height: 130%;
        }

        .dt-text-wrapper {
            display: flex;
            align-items: center;
        }
    }

    dd {
        span {
            font-size: 14px;
            line-height: 160%;
        }

        .dd-text-wrapper {
            padding:  50px 0 50px 65px;
        }
    }

    & > *  {
        color: ${p => p.theme.colors.text};
    }

    .dd-dt-wrapper {
        border-bottom: 1px solid ${p => p.theme.colors.highText};

        :first-child {
            border-top: 1px solid ${p => p.theme.colors.highText};
        }
    }
`

interface FaqProps {

}

const Faq: React.FC<FaqProps> = () => {
    const { t } = useTranslation()
    const voc = useVocabulary()
    const data = useAppSelector(getFaqData)
    const dispatch = useAppDispatch()

    const handler = {
        click: (index: number) => {
            dispatch(mainPageActions.toggleFaqIsOpen(index))
        }
    }

    return <FaqStyled>
        <h2>{voc(p => p.faq)}</h2>
        <dl>
            {data.map((item, index) => (
                <div key={index} className="dd-dt-wrapper">
                    <dt>
                        <ListItemButton onClick={() => handler.click(index)}>
                            <ListItemText className="dt-text-wrapper" primary={t(item.question)} />
                            {data[index].isOpen ? <ArrowIcon direction={ArrowIconEnum.Down} /> : <ArrowIcon direction={ArrowIconEnum.Right} />}
                        </ListItemButton>
                    </dt>
                    <dd>
                        <Collapse in={data[index].isOpen} timeout="auto" unmountOnExit>
                            <List className="dd-text-wrapper" component="div" disablePadding>
                                <ListItemText primary={t(item.answer)} />
                            </List>
                        </Collapse>
                    </dd>
                </div>
            ))}

        </dl>

    </FaqStyled>
}

export default Faq