"use client";
import React from "react";
import Header from "../../components/common/Header";

export default function FiscalitePage() {
  return (
    <>
      <Header />
      {/* Section précédente ... */}
      {/* Nouvelle section Sommaire */}
      <div className="w-full flex justify-center py-8 bg-transparent">
        <div
          className="relative rounded-lg shadow"
          style={{
            width: 1360,
            minHeight: 291,
            background: "rgba(255,255,255,0)",
            maxWidth: "100%",
            boxShadow: "0px 0px 7.35px 1.47px #DDD",
          }}
        >
          {/* Title */}
          <h2
            className="absolute uppercase font-source-sans font-semibold"
            style={{
              left: 22,
              top: 26,
              color: "#112033",
              fontSize: 20.6,
              lineHeight: "1.3em",
              letterSpacing: 1,
            }}
          >
            Sommaire
          </h2>
          {/* Icon (placeholder) */}
          <div
            className="absolute opacity-50"
            style={{
              left: 1303,
              top: 21,
              width: 24.58,
              height: 26.46,
              background: "#112033",
              borderRadius: 4,
            }}
          />
          {/* Main text block */}
          <div
            className="absolute"
            style={{
              left: 22,
              top: 70,
              width: 509,
              color: "#243E5F",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: 14,
              lineHeight: "1.77em",
            }}
          >
            <p>
              Qu’est-ce que l’optimisation fiscale patrimoniale ?<br />
              Pourquoi mettre en place une stratégie d’optimisation fiscale ?<br />
              Quelles sont les règles à respecter pour bénéficier des avantages fiscaux ?<br />
              Quels sont les meilleurs supports et placements pour optimiser sa fiscalité ?<br />
              Exemple d’une stratégie d’optimisation fiscale réussie<br />
              Quels pièges éviter et quelles bonnes pratiques adopter ?<br />
              Questions fréquentes sur l’optimisation fiscale
            </p>
          </div>
          {/* List of items (Sommaire) - texte seul */}
          <div
            className="absolute"
            style={{
              left: 554,
              top: 47,
              width: 724,
              height: 223,
              display: "flex",
              gap: 24,
            }}
          >
            {/* Item 1 */}
            <div
              className="flex flex-col items-center justify-center rounded-lg shadow"
              style={{
                width: 165,
                height: 139,
                background: "#4EBBBD",
                color: "#fff",
                fontWeight: 600,
                fontSize: 14,
                position: "relative",
                padding: 16,
              }}
            >
              <span className="text-center px-2">
                Un prix d’acquisition avantageux grâce à une TVA réduite à 10 %
              </span>
            </div>
            {/* Item 2 */}
            <div
              className="flex flex-col items-center justify-center rounded-lg shadow"
              style={{
                width: 165,
                height: 139,
                background: "#4EBBBD",
                color: "#fff",
                fontWeight: 600,
                fontSize: 14,
                position: "relative",
                padding: 16,
              }}
            >
              <span className="text-center px-2">
                Autre avantage fiscal ou information
              </span>
            </div>
            {/* Item 3 (exemple) */}
            <div
              className="flex flex-col items-center justify-center rounded-lg shadow"
              style={{
                width: 165,
                height: 139,
                background: "#4EBBBD",
                color: "#fff",
                fontWeight: 600,
                fontSize: 14,
                position: "relative",
                padding: 16,
              }}
            >
              <span className="text-center px-2">
                Encore un autre avantage ou info
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Section LLI Figma node 908-21 */}
      <div className="w-full flex justify-center py-12 bg-white">
        <div
          className="relative flex flex-row items-start rounded-lg shadow-md"
          style={{
            width: 1328,
            minHeight: 649,
            background: "#fff",
            maxWidth: "100%",
          }}
        >
          {/* Texte à gauche */}
          <div style={{ width: 650, padding: 32, position: 'relative' }}>
            {/* Divider */}
            <div style={{ width: 48, height: 1.6, background: '#4EBBBD', marginBottom: 24 }} />
            {/* Heading */}
            <h2
              className="font-source-sans uppercase"
              style={{
                color: "#112033",
                fontSize: 20,
                fontWeight: 400,
                lineHeight: '1.58em',
                marginBottom: 24,
              }}
            >
              Investissement Patrimonial & Fiscalité Optimisée : Le Dispositif LLI
            </h2>
            {/* Paragraph */}
            <p
              className="font-source-sans"
              style={{
                color: "#686868",
                fontSize: 14.4,
                lineHeight: '1.66em',
                marginBottom: 32,
              }}
            >
              Le Logement Locatif Intermédiaire (LLI) est une solution d’investissement immobilier conçue pour les particuliers souhaitant optimiser leur fiscalité tout en développant leur patrimoine.<br />
              Il s’adresse aux investisseurs recherchant une combinaison efficace entre performance financière, sécurité patrimoniale et avantages fiscaux.<br />
              <br />
              <b>Avec le dispositif LLI, vous bénéficiez :</b><br />
              D’un investissement dans un bien immobilier neuf, conforme aux dernières réglementations techniques et environnementales<br />
              D’une TVA réduite à 10 % sur le prix d’acquisition, permettant d’alléger votre coût d’investissement<br />
              D’un crédit d’impôt sur la taxe foncière, valable jusqu’à 20 ans, venant renforcer la rentabilité de votre opération patrimoniale
            </p>
            {/* Button */}
            <button
              className="rounded-lg px-8 py-3 font-source-sans font-semibold text-white shadow"
              style={{
                background: '#B99066',
                fontSize: 16,
                boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.25)',
              }}
            >
              Je réalise ma simulation
            </button>
          </div>
          {/* Image à droite */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 649 }}>
            <img
              src="/images/fiscalite-lli-image-aeac3b.png"
              alt="Investissement LLI"
              style={{ width: 638, height: 626, objectFit: 'cover', borderRadius: 16 }}
            />
          </div>
        </div>
      </div>
      {/* Section LLI Benefits Figma node 191-19192 */}
      <div className="w-full flex justify-center py-12 bg-white">
        <div
          className="relative flex flex-row items-start rounded-lg shadow-md"
          style={{
            width: 1323,
            minHeight: 669,
            background: "#fff",
            maxWidth: "100%",
          }}
        >
          {/* Image à gauche */}
          <div style={{ width: 573, height: 495, marginTop: 40, marginRight: 45, borderRadius: 16, overflow: 'hidden' }}>
            <img
              src="/images/fiscalite-lli-benefits-66eac5.png"
              alt="LLI Avantages"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 16 }}
            />
          </div>
          {/* Divider vertical */}
          <div style={{ width: 1.6, height: 495, background: '#4EBBBD', marginTop: 40, marginRight: 45 }} />
          {/* Texte à droite */}
          <div style={{ flex: 1, minWidth: 0, marginTop: 40 }}>
            <div style={{ color: '#000', fontFamily: 'Source Sans Pro', fontWeight: 400, fontSize: 16, lineHeight: '1.98em', textTransform: 'uppercase' }}>
              <p>
                Pourquoi choisir le dispositif LLI pour votre stratégie patrimoniale ?<br /><br />
                Investir en LLI, c’est bénéficier d’une combinaison gagnante entre avantages fiscaux et acquisition d’un patrimoine immobilier neuf, tout en maîtrisant vos risques.<br /><br />
                Les atouts majeurs pour l’investisseur privé :<br /><br />
                ✅ TVA réduite à 10 % sur l’acquisition, pour un prix d’achat optimisé<br />
                ✅ Crédit d’impôt sur la taxe foncière, valable jusqu’à 20 ans, permettant d’alléger vos charges<br />
                ✅ Frais de notaire réduits (2 à 3 %), bien plus avantageux que dans l’immobilier ancien<br />
                ✅ Exonération partielle de taxe foncière pendant les deux premières années<br />
                ✅ Conformité aux dernières normes énergétiques (RE2020), garantissant des performances optimales et évitant les passoires thermiques<br />
                ✅ Garantie décennale, garantie biennale et garantie de parfait achèvement sécurisant votre investissement<br />
                ✅ Possibilité de personnaliser les finitions en VEFA (Vente en l’état futur d’achèvement)<br />
                ✅ Pas de travaux à prévoir et des équipements modernes intégrés dès la livraison
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Section LLI Bottom Figma node 191-19193 */}
      <div className="w-full flex justify-center py-12 bg-white">
        <div
          className="relative flex flex-row items-center rounded-lg shadow-md"
          style={{
            width: 1336,
            minHeight: 254,
            background: "#fff",
            maxWidth: "100%",
          }}
        >
          {/* Texte et bouton à gauche */}
          <div style={{ width: 688, padding: 32, position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ color: '#000', fontFamily: 'Source Sans Pro', fontWeight: 600, fontSize: 16, lineHeight: '1.5em', marginBottom: 16 }}>
              Investissez avec le LLI : TVA réduite et avantages fiscaux durables<br /><br />
              Profitez d’un investissement sécurisé qui combine :<br /><br />
              TVA réduite à 10 % sur l’acquisition de biens immobiliers neufs<br />
              Crédit d’impôt sur la taxe foncière, vous garantissant des économies fiscales pendant jusqu’à 20
            </div>
            {/* Bouton */}
            <button
              className="rounded-lg px-8 py-3 font-source-sans font-semibold text-white shadow"
              style={{
                background: '#B99066',
                fontSize: 16,
                boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.25)',
                marginTop: 12,
                width: 230,
                height: 40,
              }}
            >
              Je réalise ma simulation
            </button>
          </div>
          {/* Image à droite */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', minHeight: 254 }}>
            <img
              src="/images/fiscalite-lli-section-bottom-1b4b7d.png"
              alt="LLI Section Bottom"
              style={{ width: 837, height: 254, objectFit: 'cover', borderRadius: 16 }}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center bg-[#FAFFEF] py-12">
        <div
          className="relative rounded-lg shadow-md"
          style={{
            width: 784.87,
            minHeight: 448.42,
            background: "#FAFFEF",
            maxWidth: "100%",
          }}
        >
          {/* Breadcrumb */}
          <div
            className="absolute left-10 top-[350px] flex items-center text-[12px] font-source-sans"
            style={{ color: "#686868" }}
          >
            <span>Accueil</span>
            <span className="mx-1">{'>'}</span>
            <span>Fiscalité</span>
            <span className="mx-1">{'>'}</span>
            <span style={{ color: "#B99066" }}>
              Investir en Logement Locatif Intermédiaire (LLI)
            </span>
          </div>
          {/* Heading */}
          <h1
            className="absolute left-10 top-[102px] font-source-sans font-light"
            style={{
              color: "#112033",
              fontSize: 48,
              width: 709,
              lineHeight: "1.24em",
            }}
          >
            Tout savoir sur la fiscalité patrimoniale et l'optimisation fiscale
          </h1>
          {/* Paragraph */}
          <p
            className="absolute left-10 top-[236px] font-source-sans"
            style={{
              color: "#686868",
              fontSize: 14.4,
              width: 665,
              lineHeight: "1.3em",
            }}
          >
            Vous cherchez à optimiser votre fiscalité tout en sécurisant et valorisant votre patrimoine ?<br />
            Les stratégies de fiscalité patrimoniale vous permettent de conjuguer rendement, sécurité et transmission, en toute conformité avec la législation fiscale.<br />
            Accessible aussi bien aux particuliers qu'aux chefs d’entreprise, l'optimisation fiscale repose sur des solutions juridiques, financières et immobilières adaptées à votre situation et à vos projets.
          </p>
        </div>
      </div>
    </>
  );
} 