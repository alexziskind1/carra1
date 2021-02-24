import { getNodeById } from "@nativescript/core/debugger/dom-node";

export type NavNode = {
    id: string;
    title: string;
    imgSrc?: string;
    childNodes?: NavNode[];
};

export const navData: NavNode = {
    id: 'root',
    title: 'home',
    childNodes: [
        {
            id: 't1',
            title: 'PFAPA',
            childNodes: [
                {
                    id: 'l11',
                    title: 'Inclusion Criteria',
                    imgSrc: '~/images/PFAPA/inclusion.png'
                },
                {
                    id: 'l12',
                    title: 'CTPs',
                    imgSrc: '~/images/PFAPA/ctps.png'
                }
            ]
        },
        {
            id: 't2',
            title: 'JIA - Associated & Idiopathic Chronic Anterior Uveitis',
            childNodes: [
                {
                    id: 'st21',
                    title: 'Inclusion Exclusion Criteria',
                    imgSrc: '~/images/Uveitis/exclusion_inclusion.png'
                },
                {
                    id: 'st22',
                    title: 'Methotrexate CTP',
                    childNodes: [
                        {
                            id: 'sl221',
                            title: 'Oral',
                            imgSrc: '~/images/Uveitis/oral.png'
                        },
                        {
                            id: 'sl222',
                            title: 'Subcutaneous',
                            imgSrc: '~/images/Uveitis/subcutaneous.png'
                        }
                    ]
                },
                {
                    id: 'st23',
                    title: 'Anti-TNF CTPs',
                    childNodes: [
                        {
                            id: 'sl231',
                            title: 'Weekly',
                            imgSrc: '~/images/Uveitis/weekly.png'
                        },
                        {
                            id: 'Biweekly',
                            title: 'Subcutaneous',
                            imgSrc: '~/images/Uveitis/biweekly.png'
                        },
                        {
                            id: 'sl233',
                            title: 'Infliximab',
                            imgSrc: '~/images/Uveitis/inflix.png'
                        }
                    ]
                }
            ]
        }
    ]
};

function getMatchNode(id: string, n: NavNode): NavNode {
    if (n.id === id) {
        return n;
    }
    if (n.childNodes && n.childNodes.length > 0) {
        for (let i = 0; i < n.childNodes.length; i++) {
            const rn = getMatchNode(id, n.childNodes[i]);
            if (rn) {
                return rn;
            }
        }
    }
}

export function findNavNodeById(id: string): NavNode {
    return getMatchNode(id, navData);
}