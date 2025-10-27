import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const copyIP = () => {
    navigator.clipboard.writeText('play.anarchy.net');
    toast({
      title: 'IP скопирован!',
      description: 'play.anarchy.net',
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 border-b-4 border-border bg-card shadow-pixel">
        <div className="container mx-auto flex items-center justify-between p-4">
          <h1 className="text-sm md:text-xl text-card-foreground">ANARCHY SERVER</h1>
          <div className="flex gap-2 md:gap-4">
            {['home', 'admins', 'rules', 'modes', 'donate'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-xs md:text-sm px-2 md:px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 border-2 border-border shadow-pixel transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                {section === 'home' && 'ГЛАВНАЯ'}
                {section === 'admins' && 'АДМИНЫ'}
                {section === 'rules' && 'ПРАВИЛА'}
                {section === 'modes' && 'РЕЖИМЫ'}
                {section === 'donate' && 'ДОНАТ'}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center p-4 md:p-8">
        <div className="text-center space-y-6 md:space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-2xl md:text-6xl text-foreground drop-shadow-lg">
              АНАРХИЯ
            </h1>
            <h2 className="text-xl md:text-4xl text-secondary">
              БЕЗ ПРАВИЛ
            </h2>
          </div>
          <p className="text-xs md:text-base max-w-2xl mx-auto text-foreground/80 leading-relaxed">
            Полная свобода действий. Никаких ограничений. Выживай как можешь.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="bg-muted border-4 border-border p-4 md:p-6 shadow-pixel-lg">
              <p className="text-xs md:text-sm text-muted-foreground mb-2">IP СЕРВЕРА:</p>
              <p className="text-sm md:text-xl font-bold text-foreground">play.anarchy.net</p>
            </div>
            <Button 
              size="lg" 
              onClick={copyIP}
              className="text-xs md:text-base px-6 md:px-8 py-4 md:py-6 bg-secondary text-secondary-foreground border-4 border-border shadow-pixel-lg hover:shadow-pixel hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
            >
              <Icon name="Copy" className="mr-2" size={20} />
              КОПИРОВАТЬ IP
            </Button>
          </div>
        </div>
      </section>

      <section id="admins" className="min-h-screen p-4 md:p-8 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-4xl mb-8 md:mb-12 text-center text-foreground">АДМИНИСТРАЦИЯ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { name: 'Steve_Admin', role: 'Главный админ', level: 'OWNER', icon: 'Crown' },
              { name: 'Alex_Mod', role: 'Модератор', level: 'MODERATOR', icon: 'Shield' },
              { name: 'Herobrine', role: 'Техподдержка', level: 'HELPER', icon: 'Wrench' }
            ].map((admin) => (
              <Card key={admin.name} className="border-4 border-border shadow-pixel-lg bg-card hover:shadow-pixel hover:translate-x-[4px] hover:translate-y-[4px] transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm md:text-lg text-card-foreground">{admin.name}</CardTitle>
                    <Icon name={admin.icon as any} className="text-accent" size={24} />
                  </div>
                  <CardDescription className="text-xs md:text-sm text-card-foreground/70">{admin.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-primary/20 border-2 border-primary p-2 md:p-3">
                    <p className="text-xs md:text-sm text-primary-foreground font-bold">{admin.level}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="rules" className="min-h-screen flex items-center justify-center p-4 md:p-8">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-4xl mb-8 md:mb-12 text-center text-foreground">ПРАВИЛА СЕРВЕРА</h2>
          <Card className="border-4 border-destructive shadow-pixel-lg bg-card">
            <CardHeader>
              <CardTitle className="text-xl md:text-3xl text-destructive flex items-center justify-center gap-4">
                <Icon name="AlertTriangle" size={32} />
                НИКАКИХ ПРАВИЛ
                <Icon name="AlertTriangle" size={32} />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 md:space-y-6">
              <div className="bg-destructive/20 border-2 border-destructive p-4 md:p-6">
                <p className="text-xs md:text-base text-card-foreground leading-relaxed">
                  На этом сервере действует полная анархия. Вы можете делать всё что угодно:
                </p>
              </div>
              <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-card-foreground/90">
                <li className="flex items-start gap-3">
                  <Icon name="Pickaxe" className="text-accent mt-1" size={16} />
                  <span>Грифить базы других игроков</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Swords" className="text-secondary mt-1" size={16} />
                  <span>PvP в любое время и в любом месте</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Box" className="text-primary mt-1" size={16} />
                  <span>Красть ресурсы</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Flame" className="text-destructive mt-1" size={16} />
                  <span>Использовать любые тактики выживания</span>
                </li>
              </ul>
              <div className="bg-muted border-2 border-border p-4 text-center">
                <p className="text-xs md:text-sm text-foreground font-bold">
                  ВЫЖИВАЙ КАК МОЖЕШЬ!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="modes" className="min-h-screen p-4 md:p-8 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-4xl mb-8 md:mb-12 text-center text-foreground">ИГРОВЫЕ РЕЖИМЫ</h2>
          <Tabs defaultValue="survival" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 bg-card border-4 border-border shadow-pixel">
              <TabsTrigger value="survival" className="text-xs md:text-sm">SURVIVAL</TabsTrigger>
              <TabsTrigger value="creative" className="text-xs md:text-sm">CREATIVE</TabsTrigger>
              <TabsTrigger value="hardcore" className="text-xs md:text-sm">HARDCORE</TabsTrigger>
            </TabsList>
            <TabsContent value="survival" className="mt-6">
              <Card className="border-4 border-border shadow-pixel-lg bg-card">
                <CardHeader>
                  <CardTitle className="text-lg md:text-2xl text-card-foreground flex items-center gap-3">
                    <Icon name="Heart" className="text-destructive" size={24} />
                    Режим выживания
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-xs md:text-sm text-card-foreground/80 space-y-3">
                  <p>Классический режим выживания без ограничений.</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Добывай ресурсы</li>
                    <li>Строй базы</li>
                    <li>Сражайся с мобами и игроками</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="creative" className="mt-6">
              <Card className="border-4 border-border shadow-pixel-lg bg-card">
                <CardHeader>
                  <CardTitle className="text-lg md:text-2xl text-card-foreground flex items-center gap-3">
                    <Icon name="Lightbulb" className="text-accent" size={24} />
                    Креативный режим
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-xs md:text-sm text-card-foreground/80 space-y-3">
                  <p>Строй всё что захочешь с неограниченными ресурсами.</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Бесконечные блоки</li>
                    <li>Полёты</li>
                    <li>Мгновенное разрушение</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="hardcore" className="mt-6">
              <Card className="border-4 border-border shadow-pixel-lg bg-card">
                <CardHeader>
                  <CardTitle className="text-lg md:text-2xl text-card-foreground flex items-center gap-3">
                    <Icon name="Skull" className="text-destructive" size={24} />
                    Хардкорный режим
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-xs md:text-sm text-card-foreground/80 space-y-3">
                  <p>Максимальная сложность. Одна жизнь.</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Перманентная смерть</li>
                    <li>Усиленные мобы</li>
                    <li>Только для настоящих профи</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="donate" className="min-h-screen p-4 md:p-8 flex items-center">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-4xl mb-8 md:mb-12 text-center text-foreground">ДОНАТ И ПОКУПКИ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { 
                name: 'VIP', 
                price: '199₽', 
                features: ['Цветной ник', 'Приватный чат', '5 точек дома'],
                color: 'primary'
              },
              { 
                name: 'PREMIUM', 
                price: '499₽', 
                features: ['Всё из VIP', 'Кит раз в день', '10 точек дома', 'Fly на спавне'],
                color: 'accent'
              },
              { 
                name: 'ELITE', 
                price: '999₽', 
                features: ['Всё из PREMIUM', 'Кит 2 раза в день', 'Безлимит точек дома', 'Fly везде'],
                color: 'secondary'
              }
            ].map((pack) => (
              <Card key={pack.name} className={`border-4 border-border shadow-pixel-lg bg-card hover:shadow-pixel hover:translate-x-[4px] hover:translate-y-[4px] transition-all ${pack.name === 'PREMIUM' ? 'md:scale-105' : ''}`}>
                <CardHeader className={`bg-${pack.color} border-b-4 border-border`}>
                  <CardTitle className={`text-lg md:text-2xl text-${pack.color}-foreground text-center`}>
                    {pack.name}
                  </CardTitle>
                  <CardDescription className={`text-xl md:text-3xl text-${pack.color}-foreground text-center font-bold`}>
                    {pack.price}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-3">
                  <ul className="space-y-2 text-xs md:text-sm text-card-foreground/80">
                    {pack.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" className={`text-${pack.color} mt-0.5`} size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-4 bg-${pack.color} text-${pack.color}-foreground border-2 border-border shadow-pixel hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all`}
                  >
                    <Icon name="ShoppingCart" className="mr-2" size={16} />
                    КУПИТЬ
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-card border-t-4 border-border p-6 md:p-8 text-center shadow-pixel">
        <div className="container mx-auto space-y-4">
          <p className="text-xs md:text-sm text-card-foreground/70">
            © 2024 ANARCHY SERVER. Все права защищены.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="icon" className="border-2 border-border shadow-pixel hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
              <Icon name="MessageCircle" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="border-2 border-border shadow-pixel hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
              <Icon name="Mail" size={20} />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
