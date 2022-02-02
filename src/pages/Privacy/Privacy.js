import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  MainHeader,
  ContentWrapper,
  Paragraph,
  Wrapper,
  SubHeader,
} from './Privacy.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Privacy() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Wrapper>
      <MainHeader
        data-aos="fade-down"
        data-aos-delay="300"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        {t('privacy')}
      </MainHeader>
      <ContentWrapper
        data-aos="fade-up"
        data-aos-delay="1300"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <Paragraph>
          Der Schutz der Privatsphäre der Nutzer ist für FENSTER & BAUTECHNIK
          NATALIA STACHNIK besonders wichtig. Damit wird den Nutzern der Website
          www.fenster-stachnik.com ein hoher Datenschutzstandard garantiert.
          FENSTER & BAUTECHNIK NATALIA STACHNIK, als Datenverwalter, kümmert
          sich um die Sicherheit der von den Benutzern zur Verfügung gestellten
          Daten.
        </Paragraph>
        <Paragraph>
          Der für die Verarbeitung Verantwortliche ist ferner bestrebt, die
          Nutzer ordnungsgemäß über ihre Rechte und Pflichten im Zusammenhang
          mit der Verarbeitung personenbezogener Daten zu informieren,
          insbesondere im Hinblick auf den Inhalt der Bestimmungen zum Schutz
          personenbezogener Daten, die in der Verordnung (EU) 2016/679 des
          Europäischen Parlaments und des Rates vom 27.04.2016 zum Schutz
          natürlicher Personen bei der Verarbeitung personenbezogener Daten, zum
          freien Datenverkehr und zur Aufhebung der Richtlinie 95/46/EG (im
          Folgenden "RODO") festgelegt sind. Um die Privatsphäre der Nutzer des
          Dienstes zu schützen, informiert der Administrator in diesem Dokument
          über die Rechtsgrundlage für die Verarbeitung personenbezogener Daten,
          die von den Nutzern im Zusammenhang mit der Nutzung des Dienstes
          www.fenster-stachnik.com (im Folgenden "Dienst") zur Verfügung
          gestellt werden, über die Methoden der Erhebung, Verarbeitung und des
          Schutzes personenbezogener Daten sowie über die Rechte der Nutzer.
        </Paragraph>
        <Paragraph>
          Ein Nutzer ist jede natürliche Person, auf die sich die Daten beziehen
          und die die Website www.fenster-stachnik.com oder die über die Website
          verfügbaren elektronischen Dienste nutzt.
        </Paragraph>
        <Paragraph>
          Der Verwalter der vom Nutzer auf www.fenster-stachnik.com zur
          Verfügung gestellten persönlichen Daten ist FENSTER & BAUTECHNIK
          NATALIA STACHNIK, Oberurseler Str. 3, 61440 Oberursel, Steuernummer
          00387104337, (nachstehend "Verwalter" genannt).
        </Paragraph>
        <SubHeader>1. DIE ZUSTIMMUNG DES NUTZERS</SubHeader>
        <Paragraph>
          Die Nutzung des Dienstes www.fenster-stachnik.com durch den Nutzer
          bedeutet, dass der Nutzer akzeptiert, dass der Administrator
          personenbezogene Daten in Übereinstimmung mit dieser
          Datenschutzrichtlinie sammelt und verwendet.
        </Paragraph>
        <Paragraph>
          Die personenbezogenen Daten des Dienstnutzers werden vom Verwalter auf
          der Grundlage seiner Zustimmung und in einigen hier beschriebenen
          Fällen im Rahmen des berechtigten Interesses des Verwalters
          verarbeitet. Der Nutzer hat das Recht, seine vorherige Zustimmung
          jederzeit zu widerrufen. Der Widerruf der Einwilligung berührt nicht
          die Rechtmäßigkeit der Verarbeitung, die auf der Grundlage der
          Einwilligung vor deren Widerruf erfolgt ist.
        </Paragraph>
        <Paragraph>
          Wenn diese Datenschutzrichtlinie geändert wird und Sie den Dienst
          weiterhin nutzen, stimmen Sie der aktuellen Datenschutzrichtlinie zu.
        </Paragraph>
        <SubHeader>
          2. VOM FÜR DIE VERARBEITUNG VERANTWORTLICHEN VERARBEITETE
          PERSONENBEZOGENE DATEN
        </SubHeader>
        <Paragraph>1. Wie Sie persönliche Daten erhalten</Paragraph>
        <Paragraph>
          Der Administrator erhält persönliche Daten direkt über den Benutzer
          eine Nachricht an den Administrator sendet.
        </Paragraph>
        <Paragraph>
          Die Angabe der im Kontaktformular enthaltenen persönlichen Daten ist
          freiwillig.
        </Paragraph>
        <Paragraph>2. Arten der verarbeiteten persönlichen Daten</Paragraph>
        <Paragraph>
          Der Administrator sammelt über den Dienst die folgenden persönlichen
          Daten über den Benutzer:
        </Paragraph>
        <Paragraph>Vor- und Nachname;</Paragraph>
        <Paragraph>E-Mail-Adresse;</Paragraph>
        <Paragraph>Telefonnummer;</Paragraph>
        <Paragraph>Inhalt der Nachricht;</Paragraph>
        <Paragraph>Betreff der Nachricht;</Paragraph>
        <Paragraph>Name des Unternehmens.</Paragraph>
        <SubHeader>
          3. ZWECKE DER VERARBEITUNG PERSONENBEZOGENER DATEN
        </SubHeader>
        <Paragraph>
          Die Art und Weise, wie der Administrator Daten verarbeitet, die den
          Benutzer betreffen, hängt von der Art und Weise ab, wie der Benutzer
          den Dienst nutzt und welche Funktionalitäten ihm zur Verfügung stehen.
          Der Administrator verarbeitet die persönlichen Daten der Benutzer für
          die folgenden Zwecke:
        </Paragraph>
        <Paragraph>1.Kommunikation mit dem Benutzer.</Paragraph>
        <Paragraph>
          Der Administrator verwendet Ihre persönlichen Daten, um mit Ihnen auf
          personalisierte Weise zu kommunizieren. Die Informationen, die Ihnen
          mitgeteilt werden, beziehen sich auf angebotene Produkte oder
          Dienstleistungen, die Sicherheit persönlicher Daten, Netzwerk-Updates,
          Erinnerungen, aber auch auf vorgeschlagene Angebote des Administrators
          oder seiner Partner. Die Kommunikation mit dem Benutzer betrifft auch
          die Dienstleistung des Benutzers. Persönliche Daten werden verwendet,
          um dem Benutzer zu helfen, technische Probleme zu lösen und auf seine
          Beschwerden zu reagieren.
        </Paragraph>
        <Paragraph>
          2.Präsentation kommerzieller Angebote für den Benutzer auf
          elektronischem Wege.
        </Paragraph>
        <Paragraph>
          Der Zweck der Verwendung der persönlichen Daten des Benutzers, die von
          ihm über das auf der Website verfügbare E-Mail Nachricht ist die
          Marketingkommunikation, die vom Verwalter im Rahmen seiner
          Geschäftstätigkeit durchgeführt wird, insbesondere die Präsentation
          kommerzieller Angebote für den Benutzer auf elektronischem Wege.
        </Paragraph>
        <Paragraph>
          3.Präsentation kommerzieller Angebote für den Benutzer per Telefon.
        </Paragraph>
        <Paragraph>
          Der Zweck der Verwendung der persönlichen Daten des Benutzers, die
          dieser über das auf der Website verfügbare E-Mail Nachricht ist die
          Marketingkommunikation, die der Verwalter im Rahmen seiner
          geschäftlichen Tätigkeit durchführt, insbesondere durch die
          Präsentation von kommerziellen Angeboten an den Benutzer per Telefon.
        </Paragraph>
        <Paragraph>
          4.Elektronische Zusendung von Informationen an den Benutzer im Rahmen
          des Newsletter-Abonnements des Administrators.
        </Paragraph>
        <Paragraph>
          Der Zweck der Nutzung der persönlichen Daten des Benutzers durch den
          Administrator, die im Rahmen des Abonnements des im Dienst zur
          Verfügung gestellten Newsletters des Administrators zur Verfügung
          gestellt werden, besteht darin, den Benutzer elektronisch (per E-Mail)
          über neue Produkte, Dienstleistungen, Werbeaktionen oder
          Veranstaltungen des Administrators oder seiner Partner zu informieren.
        </Paragraph>
        <Paragraph>
          5.Ermöglicht dem Benutzer, Kommentare oder Meinungen zu senden.
        </Paragraph>
        <Paragraph>
          Der Administrator verwendet die persönlichen Daten des Benutzers, um
          ihm die Möglichkeit zu geben, die Aktivitäten, Dienstleistungen oder
          Produkte des Administrators oder seiner Partner zu kommentieren/zu
          empfinden.
        </Paragraph>
        <Paragraph>
          Der Administrator kann die im E-Mail Nachricht angegebenen
          persönlichen Daten des Benutzers auch für folgende Zwecke verarbeiten
        </Paragraph>
        <Paragraph>
          um eine mögliche Vereinbarung zwischen dem Nutzer und dem Verwalter zu
          schließen und umzusetzen und den Nutzer als Kunde des Verwalters gemäß
          Artikel 6 Absatz 1 Buchstabe b des TYPS zu bedienen;
        </Paragraph>
        <Paragraph>
          finanzielle Abrechnungen mit dem Nutzer, der Kunde des Administrators
          ist, durchzuführen, um einen eventuellen zwischen den Parteien
          geschlossenen Vertrag zu erfüllen, sowie Ansprüche des Nutzers, der
          Kunde ist, im Rahmen des berechtigten Interesses des Administrators
          gemäß Art. 6.1.f) der AGB geltend zu machen und die gesetzlichen
          Verpflichtungen des Administrators gegenüber den Steuerbehörden im
          Rahmen gesonderter Regelungen gemäß Art. 6.1.c) der AGB zu erfüllen;
        </Paragraph>
        <Paragraph>
          um die Marketingaktivitäten des Administrators im Rahmen des
          berechtigten Interesses des Administrators im Sinne von Art. 6.1.f)
          des PCO sowie in Übereinstimmung mit den an den Administrator
          gerichteten Willenserklärungen bezüglich der Marketingkommunikation
          durchzuführen. Einwilligungen, die im Rahmen von
          Marketingkommunikation erteilt wurden (z.B. für die Zusendung
          kommerzieller Informationen per E-Mail oder telefonischen Kontakt für
          Direktmarketingzwecke), können jederzeit widerrufen werden, ohne dass
          die Rechtmäßigkeit der Verarbeitung, die auf der Grundlage der vor dem
          Widerruf erteilten Einwilligung erfolgte, beeinträchtigt wird;
        </Paragraph>
        <Paragraph>
          um die rechtlichen Verpflichtungen des Administrators gegenüber dem
          Nutzer, wie in den TCO definiert, im Sinne von Artikel 6 Absatz 1
          Buchstabe c der TCO zu erfüllen.
        </Paragraph>
        <SubHeader>4. WEITERGABE PERSÖNLICHER DATEN</SubHeader>
        <Paragraph>
          Die persönlichen Daten der Benutzer werden vom Administrator nicht an
          Dritte weitergegeben.
        </Paragraph>
        <SubHeader>5. BENUTZERRECHTE</SubHeader>
        <Paragraph>Benutzerrechte</Paragraph>
        <Paragraph>
          In jeder Phase der Datenverarbeitung hat der Benutzer eine Reihe von
          Rechten, die es ihm erlauben, auf seine Daten zuzugreifen, die
          Korrektheit der Datenverarbeitung zu überprüfen, sie zu korrigieren,
          sowie das Recht, gegen ihre Verarbeitung Einspruch zu erheben, er kann
          die Löschung der Daten, die Einschränkung der Verarbeitung oder die
          Übertragung verlangen.
        </Paragraph>
        <Paragraph>
          Wenn der Benutzer seine Rechte als Subjekt der persönlichen Daten
          ausüben möchte, kann er sich unter den folgenden Kontaktdaten an den
          Administrator wenden: FENSTER & BAUTECHNIK NATALIA STACHNIK,
          Oberurseler Str. 3, 61440 Oberursel, nataliastachnik.ns@gmail.com.
        </Paragraph>
        <Paragraph>
          Recht auf Einreichung einer Beschwerde bei der Aufsichtsbehörde
        </Paragraph>
        <Paragraph>
          Der Benutzer, dessen personenbezogene Daten vom Verwalter verarbeitet
          werden, hat das Recht, eine Beschwerde bei der für den Schutz
          personenbezogener Daten zuständigen Aufsichtsbehörde (Präsident des
          Amtes für den Schutz personenbezogener Daten) einzureichen.
        </Paragraph>
        <SubHeader>6. Cookies</SubHeader>
        <Paragraph>
          Der Administrator informiert, dass während der Nutzung des Dienstes
          auf dem Endgerät des Benutzers kurze Textinformationen, "Cookies"
          genannt, gespeichert werden. Die "Cookies"-Dateien enthalten folgende
          IT-Daten: IP-Adresse des Benutzers, Name der Website, von der sie
          stammen, Zeitpunkt ihrer Speicherung auf dem Endgerät des Benutzers,
          Aufzeichnung von Parametern und Statistiken und eine eindeutige
          Nummer. Cookies"-Dateien werden über einen Webbrowser, der auf dem
          Endgerät des Benutzers installiert ist, an den Server des Dienstes
          weitergeleitet.
        </Paragraph>
        <Paragraph>
          Dazu werden im Dienst "Cookies"-Dateien verwendet:
        </Paragraph>
        <Paragraph>
          Aufrechterhaltung der technischen Korrektheit und Kontinuität der
          Sitzung zwischen dem Dienstserver und dem Endgerät des Benutzers;
        </Paragraph>
        <Paragraph>
          die Nutzung der Website durch den Benutzer zu optimieren und die Art
          und Weise, wie sie auf dem Endgerät des Benutzers angezeigt werden,
          anzupassen;
        </Paragraph>
        <Paragraph>
          die Sicherheit bei der Nutzung des Dienstes zu gewährleisten;
        </Paragraph>
        <Paragraph>
          Statistiken über die Besuche auf der Website zu sammeln, um die
          Struktur und den Inhalt der Website zu verbessern;
        </Paragraph>
        <Paragraph>
          Anzeige von optimal auf Ihre Präferenzen abgestimmten Werbeinhalten
          auf Ihrem Endgerät.
        </Paragraph>
        <Paragraph>
          Im Dienst werden zwei Arten von "Cookies" verwendet: "Session"- und
          "permanente" Cookies. "Session"-"Cookies" sind Dateien, die
          automatisch vom Endgerät des Dienstbenutzers entfernt werden, nachdem
          er sich vom Dienst abgemeldet hat oder nachdem er die Webseiten des
          Dienstes verlässt oder nachdem er seinen Webbrowser ausgeschaltet hat.
          "Permanente" Dateien "Cookies" werden auf dem Endgerät des Benutzers
          für die in den Parametern der "Cookies"-Dateien angegebene Zeit oder
          bis zu ihrer Entfernung durch den Benutzer gespeichert. "Permanente"
          Dateien "Cookies" werden auf dem Endgerät des Benutzers nur mit seiner
          Zustimmung installiert.
        </Paragraph>
        <Paragraph>Der Administrator informiert darüber:</Paragraph>
        <Paragraph>
          Webbrowser akzeptieren standardmäßig die Installation von "Cookies"
          auf dem Endgerät des Benutzers. Jeder Nutzer des Dienstes kann
          jederzeit die Einstellungen für "Cookies" in dem von ihm verwendeten
          Webbrowser so ändern, dass der Browser automatisch die Handhabung von
          "Cookies" blockiert oder den Nutzer über deren Platzierung in seinem
          Endgerät informiert. Detaillierte Informationen über die Möglichkeiten
          und die Art und Weise des Umgangs mit "Cookies" sind in den
          Einstellungen des Internet-Browsers verfügbar, den der Benutzer des
          Dienstes benutzt.
        </Paragraph>
        <Paragraph>
          Die Einschränkung der Verwendung von "Cookies" durch den Benutzer kann
          sich negativ auf die Korrektheit und Kontinuität des Dienstes auf der
          Website auswirken.
        </Paragraph>
        <Paragraph>
          Cookies"-Dateien, die auf dem Endgerät des Dienstbenutzers installiert
          sind, können von Inserenten oder Geschäftspartnern, die mit dem
          Administrator zusammenarbeiten, verwendet werden.
        </Paragraph>
        <Paragraph>
          Cookies können nur in Verbindung mit anderen Daten zur Identifizierung
          der Identität, die dem Administrator vom Benutzer im Rahmen der
          Nutzung des Dienstes zur Verfügung gestellt werden, als persönliche
          Daten betrachtet werden.
        </Paragraph>
        <Paragraph>
          Nur der Administrator hat Zugriff auf "Cookies"-Dateien, die vom
          Service-Server verarbeitet werden.
        </Paragraph>
        <Paragraph>
          Wenn ein Benutzer nicht damit einverstanden ist, Informationen in
          "Cookies"-Dateien zu speichern und zu erhalten, kann er die Regeln für
          "Cookies"-Dateien über die Einstellungen seines Internet-Browsers
          ändern.
        </Paragraph>
        <SubHeader>7. ANDERE WICHTIGE INFORMATIONEN</SubHeader>
        <Paragraph>Schutz der Sicherheit persönlicher Daten</Paragraph>
        <Paragraph>
          Der Administrator führt geeignete Maßnahmen ein, um die Sicherheit der
          persönlichen Daten des Benutzers zu gewährleisten. Die sichere Nutzung
          des Dienstes wird durch die Systeme und Verfahren gewährleistet, die
          zum Schutz vor Zugriff und Offenlegung von Daten gegenüber Unbefugten
          eingesetzt werden. Darüber hinaus werden die Systeme und Prozesse des
          Administrators regelmäßig überwacht, um mögliche Bedrohungen zu
          erkennen. Persönliche Daten, die der Administrator erhält, werden in
          Computersystemen gespeichert, zu denen der Zugang streng beschränkt
          ist.
        </Paragraph>
        <Paragraph>Speicherung persönlicher Daten</Paragraph>
        <Paragraph>
          Die Dauer der Speicherung der persönlichen Daten der Benutzer hängt
          von den Zwecken der Datenverarbeitung durch den Administrator ab.
        </Paragraph>
        <Paragraph>
          Der Administrator speichert personenbezogene Daten so lange, wie es
          zur Erreichung bestimmter Zwecke erforderlich ist, d.h:
        </Paragraph>
        <Paragraph>
          für den Zeitraum der Geschäftstätigkeit des Verwalters.
        </Paragraph>
        <Paragraph>
          In jedem der oben genannten Fälle dürfen Daten nach Ablauf der
          erforderlichen Verarbeitungszeit nur zum Zwecke der Geltendmachung von
          Ansprüchen gegen die Parteien in der Beziehung verarbeitet werden, bis
          diese Ansprüche auf dem Rechtsweg endgültig geregelt sind.
        </Paragraph>
        <Paragraph>
          In jedem der oben genannten Fälle dürfen Daten nach Ablauf der
          erforderlichen Verarbeitungszeit nur zum Zwecke der Geltendmachung von
          Ansprüchen gegen die Parteien in der Beziehung verarbeitet werden, bis
          diese Ansprüche auf dem Rechtsweg endgültig geregelt sind.
        </Paragraph>
        <Paragraph>Änderungen an der Datenschutzrichtlinie</Paragraph>
        <Paragraph>
          Um die in dieser Datenschutzerklärung enthaltenen Informationen und
          ihre Übereinstimmung mit den geltenden Gesetzen zu aktualisieren, kann
          sich diese Datenschutzerklärung ändern. Wenn sich der Inhalt der
          Datenschutzrichtlinie ändert, wird das am Ende des Textes angegebene
          Datum ihrer Aktualisierung geändert. Um Informationen darüber zu
          erhalten, wie persönliche Daten geschützt werden können, empfiehlt der
          Administrator den Benutzern, die Bestimmungen der
          Datenschutzrichtlinie regelmäßig zu überprüfen.
        </Paragraph>
        <Paragraph>Kontaktinformationen</Paragraph>
        <Paragraph>
          Für alle Informationen bezüglich dieser Datenschutzrichtlinie können
          Sie sich an den Administrator für persönliche Daten wenden: FENSTER &
          BAUTECHNIK NATALIA STACHNIK, Oberurseler Str. 3, 61440 Oberursel,
          unter Verwendung der folgenden Kontaktdaten:
          nataliastachnik.ns@gmail.com.
        </Paragraph>
        <Paragraph>
          Darüber hinaus besteht auch die Möglichkeit der Kontaktaufnahme per
          Post unter der Adresse: Oberurseler Str. 3, 61440 Oberursel.
        </Paragraph>
        <Paragraph>
          Die letzte Aktualisierung dieses Dokuments fand am 24.03.2020 statt.
        </Paragraph>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Privacy;
